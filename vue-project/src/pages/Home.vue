



<template>
    <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/Closet" class="nav-link">My Closet</router-link>
        <router-link to="/About" class="nav-link">About</router-link>
        <router-link v-if="auth == false" to="/Login" class="nav-link">Log in</router-link>
        <router-link v-if="auth == true" @click="authLogOut" to="/" class="nav-link">Log out</router-link>

    </nav>

    <div class="greet">
        <p v-if="auth == true">Welcome {{ name }}</p>
    </div>

    <div class="image-container">
        <img class="item" src="../assets/image1.png">
        <img class="item" src="../assets/image2.png">
        <img class="item" src="../assets/image3.png">

    </div>

</template>

<script lang="ts">

import { getAuth } from '@firebase/auth';
import { logOut } from '@/scripts/auth_signout';
import { getData } from '@/scripts/db_read_user';

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


<style>

.greet {
    display: flex;
    justify-content: center;
}

.image-container {
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;

    margin: 5vh 2vh 2vh 2vh;

}

.image-container>.item {
    min-width: 100%;
    scroll-snap-align: start;
}

@media (min-width: 1500px) {
    nav {
        display: flex;
        background-color: #FFFFFF;
        align-items: center;
        justify-content: space-between;
        margin-right: 30%;
    }

    .nav-link {
        margin-right: 10vh;
        display: flex;
        list-style: none;
        white-space: nowrap;
        text-decoration: none;
        color: var(--main-secondary-color);
        font-weight: bold;
    }
}

@media (max-width: 1500px) {
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    }

    .img-responsive {
        max-width: max-content;
        height: auto;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-link {
        margin: 1vh 2vh;
        white-space: nowrap;
        list-style: none;
        text-decoration: none;
        color: var(--main-secondary-color);
        font-weight: bold;
    }
}
</style>