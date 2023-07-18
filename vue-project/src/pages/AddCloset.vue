<template>
    <div id="image-preview-container" class="image-preview-container">
    </div>
    <div class="loader">

    </div>
    <div class="container">


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
                    <option value="Knitwear">Knitwear</option>
                </select>
            </div>


            <div class="buttons">


                <button id="uploadBtn" @click="uploadToBucket">Upload</button>
                <label style="" for="image" class="custom-file-upload">
                    <p>Choose File</p>
                </label>
                <input type="file" id="image" accept="image/*" @change="onFileChange" multiple />
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
            const files = event.target?.files;

            for (let i = 0; files && i < files.length; i++) {
                const reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload = () => {
                    const img = document.createElement('img');
                    img.src = reader.result as string;
                    img.width = window.innerWidth * 0.95;
                    img.height = window.innerWidth * 0.95;

                    img.classList.add('item-preview');

                    document.getElementById('image-preview-container')?.appendChild(img);
                }
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

            const files = image?.files;
            let i = 0;
            var foo = 0;
            var tar = files?.length;

            for (i = 0; files && i < files?.length; i++) {
                const imageRef = ref(storage, "users/" + getAuth()?.currentUser?.email + "/" + option.value + "/" + this.generateRandomString(30));
                const file = files?.[i];
                if (file) {
                    const uploadTask = uploadBytesResumable(imageRef, file);

                    uploadTask.on(
                        "state_changed",
                        snapshot => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; // progress in percentage
                            console.log(progress); // output progress transferred

                        },
                        error => {
                            console.log(error);
                        },
                        () => {
                            console.log("Upload complete new");
                            getDownloadURL(imageRef).then(url => {
                                console.log("File available at", url);

                            })
                            foo++;
                            if (tar && foo >= tar) {
                                //@ts-ignore
                                this.$router.push('/Closet');
                            }
                        }
                    )
                }
            }


        }
    },
}

</script>


<style scoped>
/* Uploading files section */

.uploading-files-container {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50%;

}

.custom-loader {
    width: 150px;
    height: 150px;
    display: grid;
}

.custom-loader::before,
.custom-loader::after {
    content: "";
    grid-area: 1/1;
    --c: radial-gradient(farthest-side, #766DF4 92%, #0000);
    background:
        var(--c) 50% 0,
        var(--c) 50% 100%,
        var(--c) 100% 50%,
        var(--c) 0 50%;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    animation: s2 1s infinite;
}

.custom-loader::before {
    margin: 4px;
    filter: hue-rotate(45deg);
    background-size: 16px 16px;
    animation-timing-function: linear
}

@keyframes s2 {
    100% {
        transform: rotate(.5turn)
    }
}

/* -------------------- */

/* Image preview */

.image-preview-container {
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;
}

.image-preview-container>.item-preview {
    min-width: 100%;
    scroll-snap-align: start;
}

.item-preview {
    object-fit: cover;
    object-position: center;
    display: block;
}

/* ---------------------- */
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