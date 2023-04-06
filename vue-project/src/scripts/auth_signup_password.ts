import { getAuth, createUserWithEmailAndPassword, type Auth } from "firebase/auth";

/*
function to sign up user,
firebase authentication EmailAndPassword function
*/

/**
 * 
 * @param {string} email 
 * @param {string} password 
 */
export function signUp(email: string, password: string) {
    const auth: Auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode: number = error.code;
            const errorMessage: string = error.message;
            // ..

            console.log(errorMessage)
        });

}
