<!-- 

    Big page
    1) check if the user is already logged in

    yes) Show account brief
        a) How much storage their images are taking up out of their allowance
        b) sign out option

    no) Go to login page

 -->


 
 
<template>
    <button @click="logout">Log out</button>
</template>


<script lang="ts">

import { getAuth } from 'firebase/auth';
import { logOut } from '../scripts/auth_signout'

export default {

    data() {
        return {
            auth: false
        }
    },

    methods: {
        logout() {
            logOut();
        }
    },

    async mounted() {
        getAuth().onAuthStateChanged((user) => {
            if (user) {
                this.auth = true;
                console.log("Signed in")
                // if logged in show account analysis
            } else {
                this.auth = false;

                // if not logged in redirect to login page

                //@ts-ignore
                this.$router.push('/Login')
            }
        })
    }
}

</script>

<style></style>