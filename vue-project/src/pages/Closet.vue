<template>

    <div class="closet-title">
        <h1>{{ name }}'s Closet</h1>
    </div>
    <div class="closet-circle">
        <img @click="addToCloset" src="../assets/add.png" />
    </div>

    <div id="closetDiv" class="closetDiv">

    </div>

    <div class="closet-empty" v-if="emptyCloset == true">
        <img src="../assets/sad.png" />
    </div>

</template>

<script lang="ts">

import { getAuth } from '@firebase/auth';
import { getData } from '@/scripts/db_read_user';
import { logOut } from '@/scripts/auth_signout';
import { getStorage, ref, list, listAll, getDownloadURL } from '@firebase/storage';


// components

import { doc } from 'firebase/firestore';

export default {


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
                //@ts-ignore
                this.$router.push('/Login');
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

                setTimeout(() => {
                    if(closet.childNodes.length  < 1){
                    this.emptyCloset = true;
                }else{
                    this.emptyCloset = false;
                }
                
                }, 500)


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

.closet-title {
    margin-top: 5vh;
    padding-bottom: 5vh;
}

.closet-circle {
    position: fixed;
    bottom: 0;
    right: 0;
}

.closet-empty {
    display:flex;
    justify-content: center;
    align-items: center;
}

</style>