<template>
    <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/Closet" class="nav-link">My Closet</router-link>
        <router-link to="/About" class="nav-link">About</router-link>
        <router-link v-if="auth == false" to="/Login" class="nav-link">Log in</router-link>
        <router-link v-if="auth == true" @click="authLogOut" to="/" class="nav-link">Log out</router-link>

    </nav>
</template>


<script lang=ts>


import { logOut } from '@/scripts/auth_signout';

export default {
    data() {
        return {
            auth: false,
        }
    },

    methods: {
        authLogOut() {
            logOut();
        }
    }
}

</script>


<style></style>