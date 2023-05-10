<template>
    <Sidebar />


    <div v-if="emptyCloset">
        <div class="empty-closet-container">

        </div>
    </div>

    <div v-if="!emptyCloset">
        <div class="closet-container">

        </div>
    </div>


    <div class="add-button">
        <button @click="addToCloset">+</button>
    </div>
</template>
<script lang="ts">

import { getAuth } from '@firebase/auth';
import { getData } from '@/scripts/db_read_user';
import { logOut } from '@/scripts/auth_signout';
import { getStorage, ref, listAll, getDownloadURL } from '@firebase/storage';

import emptyCloset from '@/assets/sad.png';

// components

import Sidebar from '@/components/Sidebar.vue';

export default {

    components: {
        Sidebar,
    },

    data() {
        return {
            auth: false,
            name: "",
            emptyCloset: true,

        }
    },
    async mounted() {
        getAuth().onAuthStateChanged((user) => {
            if (user) {
                this.auth = true;
                console.log("Logged in")
                getData("name").then((name) => {
                    this.name = name;
                })


            } else {
                console.log("Logged out")
                this.auth = false;
            }
        })


        const storage = getStorage();
        const foldersRef = ref(storage, `users/${getAuth().currentUser?.email}/`);
        let imgArr: any[] = [];

        // loop through all images

        listAll(foldersRef)
            .then(result => {
                result.items.forEach(itemRef => {
                    console.log(itemRef.name);

                    listAll(itemRef)
                        .then(collectionResult => {
                            collectionResult.items.forEach(itemRef => {
                                getDownloadURL(itemRef)
                                    .then(url => {
                                        console.log(url);
                                    })
                            })
                        })
                })
            })




    },

    methods: {
        authLogOut() {
            logOut(); // logs out the current user
        },
        addToCloset() {
            //@ts-ignore
            this.$router.push('AddCloset');
        }
    }
}

</script>
<style>
.add-button button{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;

    font-size: x-large;
}

.login-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50%;
}

.login-info h2 {
    font-size: large;
}
</style>