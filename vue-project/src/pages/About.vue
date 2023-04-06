<template>

</template>


<script lang=ts>


import { logOut } from '@/scripts/auth_signout';

export default {
    data() {
        return {
            auth: false,
        }
    },

    mounted(){
    },

    methods: {
        
        authLogOut() {
            logOut();
        }
    }
}

</script>


<style></style>