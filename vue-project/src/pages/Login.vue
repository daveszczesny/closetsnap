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


        <div class="login-email-section">
            <div class="login-circle">
                <img src="../assets/user.png" alt="user" />
            </div>

            <div class="login-email-input">
                <input
                type="email"
                placeholder="email"
                v-model="email_length"
                :style="{fontSize: email_length.length > 25 ? 'small' : email_length.length > 22 ? 'medium' : email_length.length > 15 ? 'large' : 'x-large',
                    paddingLeft: email_length.length > 18 ? '40px' : 'inherit'}">
            </div>

        </div>

        <div class="login-password-section">
            <div class="login-circle">
                <img src="../assets/password.png" alt="user" />
            </div>

            <div class="login-email-input">
                <input
                type="password"
                placeholder="password"
                v-model="password_length"
                :style="{fontSize: password_length.length > 25 ? 'small' : password_length.length > 22 ? 'medium' : password_length.length > 15 ? 'large' : 'x-large',
                    paddingLeft: password_length.length > 18 ? '40px' : 'inherit'}">
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
            email: "",
            password: "",
            fname: "",
            signInBoolean: false,
            signInButtonMessage: "Sign in",
            createAccountMessage: "Create account",
            auth: false,


            email_length: '',
            password_length: '',
        }
    },


    methods: {


        switchCreation() {
            if (!this.signInBoolean) {
                this.createAccountMessage = "Sign in intead"
                this.signInButtonMessage = "Sign up"
                this.signInBoolean = true;
            } else {
                this.createAccountMessage = "Create account"
                this.signInButtonMessage = "Sign in"


                this.signInBoolean = false;
            }
        },


        signin_email() {
            let auth = getAuth();
            if (this.signInBoolean) {
                // create account
                if (this.email.length > 0 && this.password.length > 0) {
                    this.email = this.email.toLowerCase();
                    signUp(this.email, this.password);
                    addUser(auth, this.email, this.fname);
                }
            } else {
                // sign in to existing account
                signIn(getAuth(), this.email, this.password);
            }

            // $router isnt recognised by TypeScript
            //@ts-ignore
            this.$router.push('/')
        },

        authLogOut() {
            logOut();
        }


    }
}

</script>


<style>
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

.login-email-section{
    position: relative;
    margin-left: 5vh;
    margin-top: 12vh;
}

.login-password-section{
    position: relative;
    margin-left: 5vh;
    margin-top: 8vh;
}

.login-circle {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);

    width: 87px;
    height: 87px;
    background-color: var(--overlay-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-right: auto;
    margin-left: 1vh;

}

.login-circle img {
    max-width: 100%;
    max-height: 100%;
}

.login-email-input{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 306px;
    height: 64px;
    margin-top: 4vh;
}

.login-email-input input{
    border-radius: 15px;
    width: 100%;
    height: 100%;
    text-align: center;
    outline: none;
    border: none;

}

</style>