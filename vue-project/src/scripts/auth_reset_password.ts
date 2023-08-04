
/*
    Function to generate password reset link to send to email
*/

import { getAuth, sendPasswordResetEmail} from "firebase/auth";


/**
 * 
 * @param email 
 * @returns Promise
 */

export async function generatePasswordResetLink(email: string): Promise<void>{
    const auth = await getAuth();
    await sendPasswordResetEmail(auth, email);
}