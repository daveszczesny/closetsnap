
 
<template>
    <div class="account-heading">
        <h1>Hi there!, you're signed in under </h1>
        <h1 style="font-size: large; margin-left: 1vh; margin-top: 0.5vh">{{ email }}</h1>
    </div>


    <div class="storage">
        <div class="storage-bar">
            <div class="used-space">
            </div>
        </div>
    </div>

    <div class="storage-text">
        <p>{{ totalBytesUsed }} / {{ allowedStorageSpace }} mb used</p>
    </div>

    <!-- Account overview section -->




    <button class="logout-button" @click="logout">Log out</button>
</template>


<script lang="ts">

import { getAuth } from 'firebase/auth';
import { logOut } from '../scripts/auth_signout'
import { getStorage, ref, listAll, getMetadata } from 'firebase/storage';

import {getTotalBytesInFolder} from '../scripts/db_getTotalBytes';

export default {

    data() {
        return {
            auth: false,
            email: null as string | null,
            totalBytesUsed: 0,
            bytesToMb: 1000000,
            allowedStorageSpace: 512,
            percentageUsedSpace: 0,
        }
    },

    methods: {
        logout() {
            logOut();
        },

        
    },

    async mounted() {
        getAuth().onAuthStateChanged(async (user) => {
            if (user) {
                this.auth = true;
                console.log("Signed in")
                this.email = user.email;
                // if logged in show account analysis

                // Calculating user account analysis

                const folderPath = 'users/' + this.email;
                console.log(folderPath)
                await getTotalBytesInFolder(folderPath)
                    .then(totalBytes => {
                        if (totalBytes == null) { return; }

                        console.log("Total Bytes used by user: ", totalBytes);

                        this.totalBytesUsed = Math.round(totalBytes / this.bytesToMb);
                        this.percentageUsedSpace = (this.totalBytesUsed / this.allowedStorageSpace) * 100;


                        const bar = document.querySelector('.used-space') as HTMLDivElement;
                        bar.style.width = this.percentageUsedSpace + '%';
                    })


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

<style scoped>
.account-heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 5vh;
}

.account-heading h1 {
    font-size: x-large;
    margin-top: 1vh;
    margin-left: 0.5vh;
    margin-right: auto;
    margin-bottom: 3vh;
}


.storage-text {
    display: flex;
    justify-content: right;
    margin-right: 2vh;
}
.storage {
    display: flex;
    justify-content: center;
    margin-top: 5vh;
}
.storage-bar {
    width: 90%;
    height: 30px;
    border: 1px solid var(--main-primary-color);
    background-color: var(--text-box-color);
    border-radius: 5px;
    overflow: hidden;
}

.used-space {
    height: 100%;
    background-color: var(--main-accent-color1);
    width: 0;
}

.logout-button {
    position: absolute;
    right: 1vh;
    bottom: 1vh;

    padding: 2vh 3vh;
    border: none;
    border-radius: 30px;
    background-color: var(--main-neutral-color);

    font-size: large;
    color: black;

}

</style>