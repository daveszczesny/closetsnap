import { signInWithEmailAndPassword, type Auth} from "firebase/auth";


/* 
    sign in function, using firebase EmailAndPassword
*/

/**
 * 
 * @param {Auth} auth 
 * @param {string} email 
 * @param {string} password 
 */

export function signIn(auth: Auth, email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            return userCredential.user;
            // ...
        })
        .catch((error) => {
            return error.message;
        });
}