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

import { signUp } from '../scripts/auth_signup_password'
import { signIn } from '../scripts/auth_signin_password'
import { addUser } from '../scripts/db_add_user';
import { logOut } from '../scripts/auth_signout'
import { getAuth, signInWithPopup } from '@firebase/auth';


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

        login_join_us() {
            //@ts-ignore
            this.$router.push('/CreateAccount');
        },

        signin_email() {
            // if (this.signInBoolean) {
            //     // create account
            //     if (this.email.length > 0 && this.password.length > 0) {
            //         this.email = this.email.toLowerloginse();
            //         signUp(this.email, this.password);
            //         addUser(auth, this.email, this.fname);
            //     }
            // } else {
            // sign in to existing account

            const usr = signIn(getAuth(), this.email, this.password);
            console.log(usr);

            // $router isnt recognised by TypeScript
            //@ts-ignore
            this.$router.push('/Account')
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

    margin-top: 20%;

    align-items: center;
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
</style>