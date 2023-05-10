<template>
    <div class="container">
        <img id="image-preview">


        <div class="bottom">
            <div class="category-dropdown">
                <select id="category">
                    <option value="Tops">Tops</option>
                    <option value="Pants">Pants</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Shirts">Shirts</option>
                    <option value="Underwear">Underwear</option>
                    <option value="Bras">Bras</option>
                    <option value="Socks">Socks</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Shorts">Shorts</option>
                    <option value="Skirts">Skirts</option>
                    <option value="HoodiesSweatshirts">Hoodies & Sweatshirts</option>
                    <option value="Jackets">Jackets & Coats</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Gym">Gym wear</option>
                </select>
            </div>
            <div class="buttons">


                <button id="uploadBtn" @click="uploadToBucket">Upload</button>
                <label style="" for="image" class="custom-file-upload">
                    <p>Choose File</p>
                </label>
                <input type="file" id="image" accept="image/*" @change="onFileChange" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { getAuth } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

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

        /*
            Random String generator to generate random names for images uploaded
        */
        generateRandomString(length: number): string {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                result += chars.charAt(randomIndex);
            }
            return result;
        },


        uploadToBucket() {
            if (getAuth().currentUser == null) {
                console.log("Current User is not logged in ");
                return;
            };
            const storage = getStorage();
            const image = document.getElementById('image') as HTMLInputElement;
            const option = document.getElementById('category') as HTMLSelectElement;
            const imageRef = ref(storage, "users/" + getAuth()?.currentUser?.email + "/" + option.value + "/"+this.generateRandomString(30));

            const file = image?.files?.[0];
            if (file) {
                const uploadTask = uploadBytesResumable(imageRef, file);

                uploadTask.on(
                    "state_changed",
                    snapshot => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log(progress);
                        switch (snapshot.state) {
                            case 'paused':
                                console.log("Upload is paused");
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    error => {
                        console.log(error)
                    },
                    () => {
                        console.log('Upload Complete');
                        getDownloadURL(imageRef).then(url => {
                            console.log("File available at", url);

                        })
                    }
                )
            }
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


.bottom {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 95%;
    margin: 6%;
}

.category-dropdown select {

    display: flex;
    justify-content: center;
    width: 90%;
    margin: 5%;
    background-color: var(--main-neutral-color);
    border-radius: 15px;

    font-size: large;
    text-align: center;

}

.buttons {
    display: flex;
    flex-direction: row;
    /* position: fixed;
    bottom: 0; */

    

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

    color: var(--text-color);
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
    color: var(--text-color);
}
</style>