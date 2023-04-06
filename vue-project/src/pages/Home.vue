



<template>
    
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

}
</style>