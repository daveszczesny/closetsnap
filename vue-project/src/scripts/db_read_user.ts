import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, type Auth } from '@firebase/auth'

/*
async function to obtain user email from firestore collection
checks for auth validation and queries all collections
*/
/**
 * 
 * @param data 
 * @returns 
 */
export async function getData(data: string) {

    /* Tries to obtain auth, and retries up to n times, 1s delay per attempt */
    const n: number = 5;
    let auth: Auth = getAuth();
    for (let i: number = 0; i < n && auth.currentUser == null; i++) {
        console.log("Waiting for authentication...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        auth = getAuth();
    }

    /* Checks if auth is null, terminates if null */
    if (auth === null || !auth.currentUser?.email) {
        console.log("Authentication failed or user email is null");
        return "undefined";
    }

    /* Auth isnt null and we query the collection "users" */
    const colRef = collection(getFirestore(), "users");
    const querySnapshot = await getDocs(colRef);

    /* Check each doc in collection, for correct doc */
    let result: any;
    querySnapshot.forEach(doc => {
        const email: string = doc.data().email;
        
        if (email === auth?.currentUser?.email) {
            result = doc.data()[data];
        }
    })

    return result;

}
