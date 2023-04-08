<template>
    <button class="sidebarButton" @click="toggleLocalSideBar">☰</button>

    <div class="wrapper">
        <nav v-if="sideBarDisplay == true" class="sidebar">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="Closet" class="nav-link">My Closet</router-link>
            <router-link to="/About" class="nav-link">About</router-link>
            <router-link v-if="auth == false" to="/Login" class="nav-link">Log in</router-link>
            <router-link v-if="auth == true" @click="authLogOut" to="/" class="nav-link">Log out</router-link>
            <hr>
            <p class="nav-link">Clothes</p>

        </nav>

    </div>
</template>
<style></style>
<script lang="ts">


import { logOut } from '@/scripts/auth_signout';

export default {
    data() {
        return {
            sideBarDisplay: false,
            auth: false,
        }
    },

    methods: {
        authLogOut() {
            logOut();
        },

        toggleLocalSideBar() {
            this.sideBarDisplay = !this.sideBarDisplay;
        }
    }
}

</script>