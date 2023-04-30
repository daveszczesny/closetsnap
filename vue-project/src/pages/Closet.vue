<template>
    <Sidebar />


    <div class="image-container">
    </div>
    <div class="empty-image-container">

    </div>

    <div class="circle">
        <div @click="toggleAddToCategoryScreen" class="plus">+</div>
    </div>

    <div v-if="toggleAddCategoryScreen" class="categorySlection-wrapper">
        <button @click="addImage">Add Image</button>
        <input id="img" type="file" accept=".png .jpg">
    </div>

</template>
<script lang="ts">

import { getAuth } from '@firebase/auth';
import { getData } from '@/scripts/db_read_user';
import { logOut } from '@/scripts/auth_signout';
import { getFunctions, httpsCallable } from '@firebase/functions'
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from '@firebase/storage';

import emptyCloset from '../assets/sad.png';

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
            toggleAddCategoryScreen: false,
            img_name: ""
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


        // create storage ref, and get ref to image folder
        const storage = getStorage();
        const folderRef = ref(storage, `users/${getAuth().currentUser?.email}/`);
        let imgArr: any[] = [];

        // loop through all images in folder, and push to array
        listAll(folderRef)
            .then(res => {
                res.items.forEach((itemRef) => {
                    imgArr.push(itemRef);
                })

                // for every image ref, get url and create img element
                const imgDiv = document.querySelector('.image-container');
                imgArr.forEach(f => {
                    getDownloadURL(f)
                        .then(url => {
                            const imgElement = document.createElement('img');
                            imgElement.setAttribute('src', url);
                            imgDiv?.appendChild(imgElement);
                        })
                })
                console.log(`Displaying... ${imgArr.length} images`)

                if(imgArr.length <= 0){
                    const emptyImgDiv = document.querySelector('.empty-image-container');
                    const imgElement = document.createElement('img');
                    const pElement = document.createElement('p');
                    imgElement.src = emptyCloset;
                    imgElement.setAttribute('style', 'width:300px')
                    
                    pElement.innerText = "Your closet seems kinda empty"
                    
                    emptyImgDiv?.appendChild(imgElement);
                    emptyImgDiv?.append(pElement);


                }

            })





    },

    methods: {
        authLogOut() {
            logOut(); // logs out the current user
        },
        checkValue() {
            const foo = document.getElementById("img") as HTMLInputElement;
            const file = foo.files?.[0] as File | null;
        },
        addToCloset() {
            console.log("Currently not able to add to closet")
        },
        // toggles category screen
        toggleAddToCategoryScreen() {
            this.toggleAddCategoryScreen = !this.toggleAddCategoryScreen;
        },
        // adds image user selected
        addImage() {
            if (getAuth().currentUser == null) return;
            const storage = getStorage();
            const foo = document.getElementById("img") as HTMLInputElement;
            const file = foo.files?.[0] as File | null;
            const imageRef = ref(storage, "users/" + getAuth()?.currentUser?.email + "/" + file?.name);
            uploadBytes(imageRef, file as Blob).then(snap => {
                console.log("Uploaded");
            }).catch((e) => {
                console.log(e); // upload failed
            })
        },
        async showImages() {
            const listFiles = await httpsCallable(getFunctions(), 'listFiles');
            console.log(listFiles);
        },

        showImage(): string {
            return "";
        }

    }
}

</script>
<style>

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


.login-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50%;
}

.login-info h2 {
    font-size: large;
}

.categorySlection-wrapper {
    padding: 5vh 5vh 100% 5vh;
    background-color: var(--main-primary-color);
    margin: 5vh 2vh 0vh 2vh;
}

.categorySlection-wrapper button {
    border: none;
    border-radius: none;
    display: flex;
    flex-direction: column;
    background: none;
    user-select: none;
    font-size: x-large;
    padding-bottom: 3vh;
}

.circle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #F44336;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

/* input[type="file"] {
    display: none;
}

label.file-upload {
    display: inline-block;
    color: #FFF;
    cursor: pointer;
}

label.file-upload::before {
    content: "+";
    font-size: 24px;
    font-weight: bold;
} */

.plus {
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    user-select: none;
}
</style>