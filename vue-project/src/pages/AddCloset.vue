<template>
    <div class="container">
        <img id="image-preview">


        <div class="buttons">
            <button id="uploadBtn" @click="uploadToBucket">Upload</button>
            <label style="" for="image" class="custom-file-upload">
                <p>Choose File</p>
            </label>
            <input type="file" id="image" accept="image/*" @change="onFileChange" />
        </div>
    </div>
</template>

<script lang="ts">
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';

export default {
    data() {
        return {

        }
    },


    methods: {

        onFileChange(event: any) {
            const imagePreview = document.getElementById('image-preview') as HTMLImageElement;
            const file = event.target?.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {


                imagePreview.src = reader.result as string;

                imagePreview.width = window.innerWidth * 0.95;
                imagePreview.height = window.innerWidth * 0.95;


            }

        },

        uploadToBucket() {
            if(getAuth().currentUser == null) return;
            const storage = getStorage();
            const image = document.getElementById('image-preview') as HTMLImageElement;
            const imageRef = ref(storage, "users/" + getAuth()?.currentUser?.email + "/" + image?.name);
            
            
        }
    },
}

</script>


<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buttons {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    width: 90%;

    margin: 4%;

    height: 6vh;
   
}

button {
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    border: 0;
    width: 50%;

    background-color: var(--main-secondary-color);
    border-radius: 15px;
    font-size: medium;
    font-weight: 400;

    margin-right: 5%;
}

input[type="file"] {
    display: none;

}

.custom-file-upload {
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    border: 0;
    width: 50%;
    background-color: var(--main-secondary-color);
    border-radius: 15px;
    text-align: center;
    font-size: medium;
    font-weight: 400;

}
</style>