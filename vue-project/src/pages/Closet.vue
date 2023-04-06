<template>
    <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/Closet" class="nav-link">My Closet</router-link>
        <router-link to="/About" class="nav-link">About</router-link>
        <router-link v-if="auth == false" to="/Login" class="nav-link">Log in</router-link>
        <router-link v-if="auth == true" @click="authLogOut" to="/" class="nav-link">Log out</router-link>

    </nav>
</template>
<script lang="ts">

import { getAuth } from '@firebase/auth';
import { getData } from '@/scripts/db_read_user';
import { logOut } from '@/scripts/auth_signout';

export default {
    data() {
        return {
            auth: false,
            name: ""
        }
    },
    mounted() {
        getAuth().onAuthStateChanged((user) => {
            if(user){
                this.auth = true;
                getData("name").then((name) => {
                    this.name = name;
                })
            }else{
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
<style></style>