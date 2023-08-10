<template>
    <div class="login-top-headers">
        <div class="login-main-header-container">
            <h1>Welcome</h1>
        </div>
        <div class="ca-float-center-container">
            <h1>New Person</h1>
        </div>
    </div>

    <!-- Contains input tags, images, and login button -->
    <div class="ca-section">

        <div class="ca-name-section">
            <div class="ca-circle">
                <img src="../assets/user_name.png" />
            </div>
            <div class="ca-input">
                <input type="text" placeholder="name" v-model="name" :style="{
                    fontSize: name.length > 25 ? 'small' : name.length > 22 ? 'medium' : name.length > 15 ? 'large' : 'x-large',
                }">
            </div>
        </div>

        <div class="ca-name-section">
            <div class="ca-circle">
                <img src="../assets/user.png" />
            </div>
            <div class="ca-input">
                <input type="email" placeholder="email" v-model="email" :style="{
                    fontSize: email.length > 25 ? 'small' : email.length > 22 ? 'medium' : email.length > 15 ? 'large' : 'x-large',
                }">
            </div>
        </div>

        <div class="ca-name-section">
            <div class="ca-circle">
                <img src="../assets/bold_password.png" />
            </div>
            <div class="ca-input">
                <input type="password" placeholder="password" v-model="password" :style="{
                    fontSize: password.length > 25 ? 'small' : password.length > 22 ? 'medium' : password.length > 15 ? 'large' : 'x-large',
                }">
            </div>
        </div>


        <div class="ca-bottom-section">
            <button @click="login_sign_in">Sign in instead</button>
            <div class="ca-circle">
                <img @click="createaccount" src="../assets/arrow_right.png" />
            </div>
        </div>

    </div>
</template>

<script lang="ts">

import { signUp } from '../scripts/auth_signup_password'
import { signIn } from '../scripts/auth_signin_password'
import { addUser } from '../scripts/db_add_user';
import { logOut } from '../scripts/auth_signout'
import { getAuth, signInWithPopup } from '@firebase/auth';


// components


export default {

    data() {
        return {
            email: '',
            password: '',
            name: '',
        }
    },


    methods: {

        login_sign_in() {
            //@ts-ignore
            this.$router.push('/Login');
        },

        async createaccount() {
            if (this.email.length > 0 && this.password.length > 0) {
                this.email = this.email.toLowerCase();
                signUp(this.email, this.password);
                const boo = await addUser(getAuth(), this.email, this.name);

                if (boo) {
                    //@ts-ignore

                    this.$router.push('/')
                } else {
                    alert("Something went wrong")
                }
            }

        },
    }
}

</script>


<style>
/* Mobile devices (portrait and landscape) */
@media only screen and (min-device-width: 32px) and (max-device-width: 1024px) {

    .ca-float-center-container {
        display: flex;
        justify-content: center;
    }

    .ca-name-section {

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .ca-circle {
        width: 10vh;
        height: 10vh;
        background-color: var(--overlay-color);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;


        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .ca-name-section .ca-circle {
        transform: translate(0, 50%);
    }

    .ca-circle img {
        width: 90%;
        height: 90%;

    }

    .ca-input {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ca-input input {
        width: 85%;
        height: 5vh;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 15px;

        background-color: var(--text-box-color);
    }


    .ca-bottom-section {
        display: flex;
        flex-direction: row;

        margin-top: 20%;

        align-items: center;
    }

    .ca-bottom-section .ca-circle {
        margin-left: auto;
        margin-right: 1vh;
    }

    .ca-bottom-section .ca-circle img {
        max-width: 50%;
        max-height: 50%;
    }

    .ca-bottom-section button {
        margin-right: auto;
        margin-left: 1vh;

        background-color: var(--text-box-color);
        font-family: 'Nunito', 'sans-serif';
        font-size: medium;
        color: black;

        padding: 10px;
        border-radius: 15px;


        border: none;
        outline: none;

    }
}

/* Desktop and Laptops */
@media only screen and (min-device-width: 1025px) {

    .ca-float-center-container {
        display: flex;
        justify-content: center;
    }

    .ca-name-section {

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .ca-circle {
        width: 10vh;
        height: 10vh;
        background-color: var(--overlay-color);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;


        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .ca-name-section .ca-circle {
        transform: translate(0, 50%);

        margin-left: 62vh;
    }

    .ca-circle img {
        width: 90%;
        height: 90%;

    }

    .ca-input {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ca-input input {
        width: 60vh;
        height: 5vh;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 15px;

        background-color: var(--text-box-color);
    }


    .ca-bottom-section {
        display: flex;
        flex-direction: row;

        margin-top: 5vh;
        margin-left: 60vh;

        align-items: center;
    }

    .ca-bottom-section .ca-circle {
        margin-right: 65vh;
    }

    .ca-bottom-section .ca-circle img {
        max-width: 50%;
        max-height: 50%;
    }

    .ca-bottom-section button {
        margin-right: auto;
        margin-left: 1vh;

        background-color: var(--text-box-color);
        font-family: 'Nunito', 'sans-serif';
        font-size: medium;
        color: black;

        padding: 10px;
        border-radius: 15px;


        border: none;
        outline: none;

    }
}
</style>
