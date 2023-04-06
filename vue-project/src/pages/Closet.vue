<template>


    <!-- <div @click="addToCloset" id="circle" class="circle">
        <label for="file-upload" class="file-upload">
            <input id="file-upload" type="file" name="file">
        </label>
    </div> -->

    <div class="circle">
        <div @click="toggleAddToCategoryScreen" class="plus">+</div>
    </div>

    <div v-if="toggleAddCategoryScreen" class="categorySlection-wrapper">
        <button>Add Category</button>
        <button>Select Category</button>
    </div>


</template>
<script lang="ts">

import { getAuth } from '@firebase/auth';
import { getData } from '@/scripts/db_read_user';
import { logOut } from '@/scripts/auth_signout';
import { getStorage } from '@firebase/storage';

export default {
    data() {
        return {
            auth: false,
            name: "",
            toggleAddCategoryScreen: false,
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
            logOut();
        },
        checkValue() {
            const foo = document.getElementById("img") as HTMLInputElement;
            const file = foo.files?.[0] as File | null;
        },
        addToCloset() {
            console.log("Currently not able to add to closet")
        },
        toggleAddToCategoryScreen(){
            this.toggleAddCategoryScreen = !this.toggleAddCategoryScreen;
        }
    }
}

</script>
<style>

.categorySlection-wrapper{
    padding: 5vh 5vh 100% 5vh;
    background-color: #F44336;
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

input[type="file"] {
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
}

.plus {
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  user-select: none;
}
</style>