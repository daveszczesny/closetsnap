import { getAuth, signOut, type Auth } from '@firebase/auth'


export function logOut() {
    const auth:Auth = getAuth();
    signOut(auth).then(()=>{

    }).catch(e=>{
        console.error(e.message);
    })
}