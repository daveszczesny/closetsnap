<!-- 

    Big page
    1) check if the user is already logged in

    yes) Show account brief
        a) How much storage their images are taking up out of their allowance
        b) sign out option

    no) Go to login page

 -->


<template>

</template>


<script lang="ts">

import { getAuth } from 'firebase/auth';

export default {
    
    data() {
        return {
            auth: false
        }
    },

    async mounted() {
        getAuth().onAuthStateChanged((user) => {
            if(user){
                this.auth = true;
                // if logged in show account analysis
            }else{
                this.auth = false;

                // if not logged in redirect to login page

                //@ts-ignore
                this.$router.push('/Login')
            }
        })
    }
}

</script>

<style>
</style>