<template>
    <div class="login-top-headers">
        <div class="login-main-header-container">
            <h1>Welcome Back</h1>
        </div>
        <div class="login-float-left-container">
            <h1>Anonymous</h1>
        </div>
        <div class="login-float-right-container">
            <h1>Person</h1>
        </div>
    </div>


    <div class="login-section">

        <div class="login-name-section">
            <div class="login-circle">
                <img src="../assets/user.png" />
            </div>
            <div class="login-input">
                <input type="email" placeholder="email" v-model="email" :style="{
                    fontSize: email.length > 25 ? 'small' : email.length > 22 ? 'medium' : email.length > 15 ? 'large' : 'x-large',
                }">
            </div>
        </div>

        <div class="login-name-section">
            <div class="login-circle">
                <img src="../assets/bold_password.png" />
            </div>
            <div class="login-input">
                <input type="password" placeholder="password" v-model="password" :style="{
                    fontSize: password.length > 25 ? 'small' : password.length > 22 ? 'medium' : password.length > 15 ? 'large' : 'x-large',
                }">
            </div>

            <div class="forgot-password-container">
                <p @click="generatePasswordReset()">Forgot password?</p>
            </div>
        </div>


        <div class="login-bottom-section">
            <button @click="login_join_us">Join us</button>
            <div class="login-circle">
                <img @click="signin_email" src="../assets/arrow_right.png" />
            </div>
        </div>

    </div>
</template>

<script lang="ts">

import { getAuth } from '@firebase/auth';
import { generatePasswordResetLink } from '../scripts/auth_reset_password';
import { signIn } from '../scripts/auth_signin_password';
import { logOut } from '../scripts/auth_signout';


// components


export default {

    data() {
        return {

            auth: false,


            email: '',
            password: '',
        }
    },


    methods: {


        async generatePasswordReset() {
            try {
                await generatePasswordResetLink(this.email);
                alert("Rest link sent to email: " + this.email);
            } catch (error) {
                alert("Ensure email is entered correctly");
                return;
            }
        },

        login_join_us() {
            //@ts-ignore
            this.$router.push('/CreateAccount');
        },

        async signin_email() {
            const usr: any = await signIn(getAuth(), this.email, this.password);

            // Checks if sign in successful and lets user know
            if (usr instanceof String) {

                console.error("Login: Email or password incorrect...")
                alert("Email or password are incorrect, please try again");
            } else {
                //@ts-ignore
                this.$router.push('/Account');
            }

        },

        authLogOut() {
            logOut();
        }


    }
}

</script>


<style>
/* Mobile devices (portrait and landscape) */
@media only screen and (min-device-width: 32px) and (max-device-width: 480px) {

    .forgot-password-container {
        display: flex;
        justify-content: flex-end;

        margin-left: auto;
        margin-right: 2vh;

    }

    .forgot-password-container p {
        color: white;

    }

    .login-top-headers {
        display: flex;
        margin-top: 4vh;
        flex-direction: column;
    }

    .login-top-headers h1 {
        line-height: 0;
    }


    .login-main-header-container {
        display: flex;
        justify-content: center;
    }

    .login-float-left-container {
        display: flex;
        margin-right: auto;
        margin-left: 2vh;
    }

    .login-float-right-container {
        display: flex;
        margin-left: auto;
        margin-right: 2vh;
    }

    .login-name-section {

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .login-circle {
        width: 10vh;
        height: 10vh;
        background-color: var(--overlay-color);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;


        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .login-name-section .login-circle {
        transform: translate(0, 50%);
    }

    .login-circle img {
        width: 90%;
        height: 90%;

    }

    .login-input {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-input input {
        width: 85%;
        height: 5vh;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 15px;

        background-color: var(--text-box-color);
    }


    .login-bottom-section {
        display: flex;
        flex-direction: row;
        align-items: center;


        margin-top: 15vh;

    }

    .login-bottom-section .login-circle {

        margin-left: auto;
        margin-right: 1vh;

    }

    .login-bottom-section .login-circle img {
        max-width: 50%;
        max-height: 50%;
    }

    .login-bottom-section button {


        margin-left: 1vh;
        margin-right: auto;

        background-color: var(--text-box-color);
        font-family: 'Nunito', 'sans-serif';
        font-size: medium;

        color: black;


        padding: 12px 25px 12px 25px;
        border-radius: 15px;


        border: none;
        outline: none;

    }

}

/* Ipads and tablets (portrait and landscape) */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {

    .forgot-password-container {
        display: flex;
        justify-content: flex-end;

        margin-left: auto;
        margin-right: 2vh;

    }

    .forgot-password-container p {
        color: white;

    }

    .login-top-headers {
        display: flex;
        margin-top: 4vh;
        flex-direction: column;
    }

    .login-top-headers h1 {
        line-height: 0;
    }


    .login-main-header-container {
        display: flex;
        justify-content: center;
    }

    .login-float-left-container {
        display: flex;
        margin-right: auto;
        margin-left: 12vh;
    }

    .login-float-right-container {
        display: flex;
        margin-left: auto;
        margin-right: 12vh;
        transform: translate(0, -97%);
    }

    .login-name-section {

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .login-circle {
        width: 10vh;
        height: 10vh;
        background-color: var(--overlay-color);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;


        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .login-name-section .login-circle {
        transform: translate(0, 50%);
    }

    .login-circle img {
        width: 90%;
        height: 90%;

    }

    .login-input {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-input input {
        width: 85%;
        height: 5vh;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 15px;

        background-color: var(--text-box-color);
    }


    .login-bottom-section {
        display: flex;
        flex-direction: row;
        align-items: center;


        margin-top: 15vh;

    }

    .login-bottom-section .login-circle {

        margin-left: auto;
        margin-right: 1vh;

    }

    .login-bottom-section .login-circle img {
        max-width: 50%;
        max-height: 50%;
    }

    .login-bottom-section button {


        margin-left: 1vh;
        margin-right: auto;

        background-color: var(--text-box-color);
        font-family: 'Nunito', 'sans-serif';
        font-size: medium;

        color: black;


        padding: 12px 25px 12px 25px;
        border-radius: 15px;


        border: none;
        outline: none;

    }

}

/* Desktop and Laptops */
@media only screen and (min-device-width: 1025px) {
    .forgot-password-container {
        display: flex;
        justify-content: flex-end;

        margin-left: auto;
        margin-right: 70vh;

    }

    .forgot-password-container p {
        color: white;

    }

    .login-top-headers {
        display: flex;
        margin-top: 4vh;
        flex-direction: column;
    }

    .login-top-headers h1 {
        line-height: 0;
    }


    .login-main-header-container {
        display: flex;
        justify-content: center;
    }

    .login-float-left-container {
        display: flex;
        margin-right: auto;
        margin-left: 35%;
    }

    .login-float-right-container {
        display: flex;
        margin-left: auto;
        margin-right: 36%;
        transform: translate(0, -97%);
    }

    .login-name-section {

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .login-circle {
        width: 10vh;
        height: 10vh;
        background-color: var(--overlay-color);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        margin-left: 65vh;
    }

    .login-name-section .login-circle {
        transform: translate(0, 50%);
    }

    .login-circle img {
        width: 90%;
        height: 90%;

    }

    .login-input {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-input input {
        width: 60vh;
        height: 5vh;
        text-align: center;
        border: none;
        outline: none;
        border-radius: 15px;

        background-color: var(--text-box-color);
    }


    .login-bottom-section {
        display: flex;
        flex-direction: row;
        align-items: center;


        margin-top: 15vh;

    }

    .login-bottom-section .login-circle {

        margin-left: auto;
        margin-right: 65vh;

    }

    .login-bottom-section .login-circle img {
        max-width: 50%;
        max-height: 50%;
    }

    .login-bottom-section button {


        margin-left: 65vh;
        margin-right: auto;

        background-color: var(--text-box-color);
        font-family: 'Nunito', 'sans-serif';
        font-size: medium;

        color: black;


        padding: 12px 25px 12px 25px;
        border-radius: 15px;


        border: none;
        outline: none;

    }

}
</style>