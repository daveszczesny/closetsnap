import { signInWithEmailAndPassword, type Auth} from "firebase/auth";


/* 
    sign in function, using firebase EmailAndPassword
*/

/**
 * 
 * @param {Auth} auth 
 * @param {string} email 
 * @param {string} password 
 * @returns user | error
 */

export async function signIn(auth: Auth, email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            return userCredential.user;
        })
        .catch((error) => {

            alert("Email or password incorrect. Please try again");

            return error.message;
        });
}