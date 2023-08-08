<template>
    <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
        <div class="row">
            <div class="content">
                <p class="webname">CLOSET SNAP</p>

            </div>

            <div class="sidebar-image-container">
                <img class="sidebar-image" @click="toggleSideBar" src="../assets/close.png" />
            </div>
        </div>

        <div class="router-links">
            <router-link class="custom-link" @click="toggleSideBar" to="/">Home</router-link>
            <div class="separator">
                <img src="../assets/separation_line.png" />
            </div>
            <router-link class="custom-link" @click="toggleSideBar" to="/About">About</router-link>
            <div class="separator">
                <img src="../assets/separation_line.png" />
            </div>
            <router-link class="custom-link" @click="toggleSideBar" to="Closet">My Closet</router-link>
            <div class="separator">
                <img src="../assets/separation_line.png" />
            </div>
            <router-link class="custom-link" @click="toggleSideBar" to="/Account">Account</router-link>
        </div>

    </div>
</template>

<script lang="ts">
import { doc } from 'firebase/firestore';


export default {
    props: {
        isOpen: Boolean
    },

    methods: {
        toggleSideBar() {
            document.body.style.backgroundColor = "#5CDB95"; 
            this.$emit('close');
        }
    },

    mounted() {
        document.body.style.backgroundColor = "#8EE4AF";
    }
}

</script>

<style>

.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;   
}

.row {
    display: flex;
    flex-direction: row;
}

.content {
    display: flex;
    justify-content: center;
    flex-grow: 1;
}

.webname {
    margin: 0;
    color: var(--main-text-color);
    font-family: 'Nunito', sans-serif;
}

.sidebar-image-container {
    position: fixed;
    top:0;
    right: 0;
    margin: 1.6vh;

}

.sidebar-image {
    width: 42px;
    height: 42px;
}


.router-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 17vh;
}

.custom-link {
    text-decoration: none;
    color: var(--text-color);
    font-family: 'Nunito', 'sans-serif';
    line-height: 10vh;
    font-size: 43px;
}

.separator {
    width: 100%;
    margin-bottom: 5vh;
    display: flex;
    justify-content: center;
}

.serparator img {
    width: 100%;
    max-width: 200px;
}




</style>