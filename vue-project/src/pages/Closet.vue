<template>

    <Sidebar />

    <div v-if="!auth" class="login-info">
        <h2>Log in to use My Closet</h2>
    </div>

    <div v-if="auth" class="login-info">
        <h2>Your closet is currently empty</h2>
    </div>

    <div class="circle">
        <div @click="toggleAddToCategoryScreen" class="plus">+</div>
    </div>

    <div v-if="toggleAddCategoryScreen" class="categorySlection-wrapper">
        <button @click="addImage">Add Image</button>
        <input id="img" type="file">
    </div>
</template>
<script lang="ts">

import { getAuth } from '@firebase/auth';
import { getData } from '@/scripts/db_read_user';
import { logOut } from '@/scripts/auth_signout';
import { getStorage, ref, uploadBytes } from '@firebase/storage';

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
            toggleAddCategoryScreen: false,
            img_name: ""
        }
    },
    mounted() {
        getAuth().onAuthStateChanged((user) => {
            if (user) {
                this.auth = true;
                getData("name").then((name) => {
                    this.name = name;
                })
            } else {
                this.auth = false;
            }
        })

        // get categories from storage and show them here, as well as some photos




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

    }
}

</script>
<style>

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