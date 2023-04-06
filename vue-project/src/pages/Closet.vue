<template>

</template>
<script lang="ts">

import { getAuth } from '@firebase/auth';
import { getData } from '@/scripts/db_read_user';
import { logOut } from '@/scripts/auth_signout';

export default {
    data() {
        return {
            auth: false,
            name: "",
            sideBarDisplay: false,
        }
    },
    mounted() {
        getAuth().onAuthStateChanged((user) => {
            if (user) {
                this.auth = true;
                getData("name").then((name) => {
                    this.name = name;
                })
            } else {
                this.auth = false;
            }
        })

    },

    methods: {
        authLogOut() {
            logOut();
        }
    }
}

</script>
<style>

</style>