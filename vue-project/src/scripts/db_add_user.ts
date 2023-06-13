import { getFirestore, doc, setDoc } from "firebase/firestore";

/*
async function to add user to firestore collection "users"
*/

/**
 * 
 * @param {any} auth 
 * @param {string} email 
 * @param {string} name 
 */
export async function addUser(auth: any, email: string, name: string) {
    try {
        await setDoc(doc(getFirestore(), "users", email), {
            email: email,
            name: name,

        })


        return true;

    } catch (e) {
        console.error(e);
    }
}
