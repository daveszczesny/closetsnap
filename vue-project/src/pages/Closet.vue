<template>
    <div class="closet-title">
        <h1>{{ name }}'s Closet</h1>
        <div class="closet-title-img">
            <img @click="toggleEdit" src="../assets/edit.png" />

        </div>
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

import { logOut } from '@/scripts/auth_signout';
import { getData } from '@/scripts/db_read_user';
import { getAuth } from '@firebase/auth';
import { deleteObject, getDownloadURL, getStorage, list, ref } from '@firebase/storage';

export default {

    data() {
        return {
            auth: false,
            name: "",
            emptyCloset: true,
            editMode: false,

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

        // loads and displays the clothes saved by the user
        const parentFolder : string = `users/${getAuth().currentUser?.email}/`;
        await this.loadClothingItems(getStorage(), parentFolder);

    },

    methods: {

        /*
            Load clothes
        */
        async loadClothingItems(storage: any, parentFolder: string) {
            const closetDiv = document.getElementById('closetDiv') as HTMLDivElement;
            const imgDivs = closetDiv?.querySelectorAll('div');


            const res = await this.listPrefixInFolder(storage, parentFolder);

            res.forEach(async folder => {
                const res2 = await this.listItemsInFolder(storage, folder.fullPath);
                const { folderDiv, imgDiv } = await this.createFolderContainer(folder.name);

                res2.forEach(image_ => {
                    getDownloadURL(image_)
                        .then(image => {
                            const imgElement = this.createImageElement(image);

                            const imgDivElement = document.createElement('div');
                            imgDivElement.classList.add('closet-custom-loader');

                            folderDiv.appendChild(imgDivElement);
                            imgDiv.appendChild(imgElement);

                            this.showImages(imgElement, imgDivElement);
                        })
                })

                folderDiv.appendChild(imgDiv);
                closetDiv.appendChild(folderDiv);

            });


            setTimeout(() => {
                if (imgDivs.item.length < 1) {
                    this.emptyCloset = true;
                } else {
                    this.emptyCloset = false;
                }

            }, 1000)
        },


        /*
            displays images
        */

        showImages(imgElement: HTMLImageElement, imgDivElement: HTMLDivElement) {
            if (imgElement.complete) {
                imgElement.style.visibility = 'visible';
                imgDivElement.style.display = 'none';
            } else {
                imgElement.onload = () => {
                    imgElement.style.visibility = 'visible';
                    imgDivElement.style.display = 'none';
                }
            }
        },

        /*
            create img element for folder container
        */

        createImageElement(imageUrl: string) {
            const imgElement = document.createElement('img');

            imgElement.setAttribute('src', imageUrl);
            imgElement.setAttribute('loading', 'lazy');
            imgElement.setAttribute('visibility', 'hidden')

            imgElement.classList.add('item');

            // set image dimensions
            imgElement.style.width = `${window.innerWidth * 0.95}px`;
            imgElement.style.height = `${window.innerWidth * 0.95}px`;

            // add image click event, to delete image in edit mode
            imgElement.addEventListener('click', async () => {
                if (this.editMode) {
                    const deleteConfirmation = window.confirm('Are you sure you want to delete this image');
                    if (deleteConfirmation) {
                        await this.deleteImage(imageUrl);

                        location.reload();
                    }
                }

            })
            return imgElement;
        },

        /*
            returns prefixes from a folderpath
        */
        async listPrefixInFolder(storage: any, folderPath: string) {
            try {
                const res = await list(ref(storage, folderPath));
                return res.prefixes;
            } catch (error) {
                console.log(error);
                alert("Error occured whilst grabbing your clothes... Try again");
                return [];
            }
        },

        /*
            returns items from a folderpath
        */
        async listItemsInFolder(storage: any, folderPath: string) {
            try {
                const res = await list(ref(storage, folderPath));
                return res.items;
            } catch (error) {
                console.log(error);
                alert("Error occured whilst grabbing your clothes... Try again");
                return [];
            }
        },

        /*
            creates a folder container for the images
        */
        async createFolderContainer(folderName: string) {
            // creates folder container div and apply correct css format
            const folderDiv = document.createElement('div');
            folderDiv.classList.add('folder-container');

            // create the img container and apply correct css format
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('image-container')

            // adds title to folder container of the folder's name
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('image-title-container');
            const title = document.createElement('p');
            title.innerHTML = folderName;


            titleDiv.appendChild(title);
            folderDiv.appendChild(titleDiv);

            return { folderDiv, imgDiv };
        },



        // TODO: change to cloud function
        async deleteImage(imageUrl: any) {
            const storage = getStorage();
            const imageRef = ref(storage, imageUrl);

            try {
                await deleteObject(imageRef);
                console.log("Imaged deleted");
            } catch (error) {
                console.log("Error deleting image");
            }
        },

        authLogOut() {
            logOut(); // logs out the current user
        },
        addToCloset() {
            //@ts-ignore
            this.$router.push('AddCloset');
        },
        toggleEdit() {
            this.editMode = !this.editMode;
            const closetDiv = document.getElementById('closetDiv') as HTMLDivElement;
            const imgElements = closetDiv.querySelectorAll('img');

            if (this.editMode) {
                imgElements.forEach((imgElement) => {
                    imgElement.classList.add('item-alt');
                    imgElement.classList.remove('item');

                });
            } else {
                imgElements.forEach((imgElement) => {
                    imgElement.classList.add('item');
                    imgElement.classList.remove('item-alt')
                })
            }


        }
    }
}

</script>
<style>
/* Top title section */

.closet-title {
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
    padding-bottom: 5vh;

    justify-content: space-between;
}


.closet-title-img {

    display: flex;
    float: right;
    width: 5vh;
    height: 5vh;

}

.closet-title-img img {
    width: 100%;
    height: 100%;
}

/* Add button */

.closet-circle {
    position: fixed;
    bottom: 0;
    right: 0;
}

.closet-empty {
    display: flex;
    justify-content: center;
    align-items: center;
}


/* image */

.item {
    object-fit: cover;
    object-position: center;
}

.item-alt {
    max-width: 15vh;
    max-height: 15vh;
}

.item.loaded {
    display: block;
}

/* image container */

.image-title-container {
    display: flex;
    flex-direction: column;

    font-size: large;

    margin-top: 1vh;

}

.image-container {
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;
}

.image-container>.item {
    min-width: 100%;
    scroll-snap-align: start;
}

/* custom loader */
.closet-custom-loader {

    position: relative;
    left: 35%;
    top: 35%;

    width: 100px;
    height: 100px;
    display: grid;
    /* justify-content: center; */
}

.closet-custom-loader::before,
.closet-custom-loader::after {
    content: "";
    grid-area: 1/1;
    --c: radial-gradient(farthest-side, #766DF4 92%, #0000);
    background:
        var(--c) 50% 0,
        var(--c) 50% 100%,
        var(--c) 100% 50%,
        var(--c) 0 50%;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    animation: s2 1s infinite;
}

.closet-custom-loader::before {
    margin: 8px;
    filter: hue-rotate(45deg);
    background-size: 16px 16px;
    animation-timing-function: linear
}

@keyframes s2 {
    100% {
        transform: rotate(.5turn)
    }
}
</style>