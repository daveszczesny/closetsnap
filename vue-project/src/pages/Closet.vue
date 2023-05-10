<template>
    <Sidebar />

    <div id="closetDiv" class="closetDiv">

    </div>

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
import { getStorage, ref, list, listAll, getDownloadURL } from '@firebase/storage';

import emptyCloset from '@/assets/sad.png';

// components

import Sidebar from '@/components/Sidebar.vue';
import { doc } from 'firebase/firestore';

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
        const parentFolder = `users/${getAuth().currentUser?.email}/`; // parent folder for category folders of clothing types
        list(ref(storage, parentFolder))
            .then((res) => {
                const closet = document.getElementById('closetDiv') as HTMLDivElement;
                res.prefixes.forEach(folder => {
                
                    list(ref(storage, folder.fullPath))
                        .then(res2 => {

                            const itemArr: any[] = [];
                            res2.items.forEach(itemRef => {
                                itemArr.push(itemRef);
                            })
                            
                            const imgDiv = document.createElement('div');
                            imgDiv.classList.add('image-container')
                            const title = document.createElement('p');
                            title.innerHTML = folder.name;

                            const titleDiv = document.createElement('div');
                            titleDiv.classList.add('image-title-container');
                            titleDiv.appendChild(title);

                            imgDiv.appendChild(titleDiv);
                            itemArr.forEach(item => {
                                getDownloadURL(item)
                                    .then(image => {
                                        const imgElement = document.createElement('img');
                                        imgElement.setAttribute('src', image);
                                        imgElement.style.width = `${window.innerWidth*0.95}px`;
                                        imgElement.style.height = `${window.innerWidth*0.95}px`;
                                        imgElement.classList.add('item');
                                        imgDiv.appendChild(imgElement);
                                    })
                            })
                            closet.appendChild(imgDiv);

                        })
                })
                


            }).catch(error => {
                console.log(error);
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


.image-title-container {
    position: absolute;
    margin: -4vh 0px 0px 0px;    
}

.image-container {
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;
    margin: 5vh 2vh 2vh 2vh;
}

.image-container>.item{
    min-width: 100%;
    scroll-snap-align: start;
}

.add-button button {
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