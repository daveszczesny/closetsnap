<template>

    <Sidebar />
    
    <div class="form-container">
        <form onsubmit="return false;">
            <input v-model="fname" v-if="signInBoolean" type="text" placeholder="First name" required>
            <input v-model="email" type="email" placeholder="exmaple@gmail.com" required>
            <input v-model="password" type="password" placeholder="password" required>
            <button class="form-button" @click="signin_email">{{ signInButtonMessage }}</button>
        </form>

        <div class="separator">or</div>

        <form>
            <div class="email-container">

                <label for="email" @click="signin_email">
                    <span class="gmail-icon"></span>
                </label>
            </div>
        </form>



        <button class="create-account" @click="switchCreation">{{ createAccountMessage }}</button>

    </div>
</template>

<script lang="ts">

import { signUp } from '../scripts/auth_signup_password'
import { signIn } from '../scripts/auth_signin_password'
import { addUser } from '../scripts/db_add_user';
import { logOut } from '../scripts/auth_signout'
import { getAuth, signInWithPopup } from '@firebase/auth';


// components

import Sidebar from '@/components/Sidebar.vue';

export default {

    components: {
        Sidebar,
    },

    data() {
        return {
            email: "",
            password: "",
            fname: "",
            signInBoolean: false,
            signInButtonMessage: "Sign in",
            createAccountMessage: "Create account",
            auth: false
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
.create-account {
    background-color: transparent;
    border: none;

    margin-top: 2vh;
    margin-bottom: 1vh;
    margin-left: 1vh;
}

@media (min-width: 1505px) {

    .email-container {
        border-color: #FFFFFF;
        padding: .5vh 60% .5vh 1vh;
        border-radius: 5px;
    }

    .gmail-icon {
        display: inline-flex;
        width: 8vh;
        height: 8vh;
        margin-right: 0.5vh;
        background-image: url(../assets/gmailicon-removebg-preview.png);
        background-size: contain;
        background-repeat: no-repeat;

    }

    .gmail-icon::after {
        content: "Gmail";
        margin-left: 10vh;
        margin-top: 0.8vh;
    }

    .form-container {
        background-color: var(--main-primary-color);
        margin-top: 5%;
        border-radius: 15px;
        margin-left: 25%;
        margin-right: 25%;
        /* padding-bottom: 5vh; */
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 75px 25px 5px 25px;
    }

    input,
    .form-button {
        background-color: #FFFFFF;
        border-color: #FFFFFF;
        border: 0;
        border-radius: 5px;

        width: 90%;
        height: 5vh;
        margin: 1%;
        text-align: center;

        font-size: x-large;

    }

    .form-button {
        margin-top: 1.5vh;
        background-color: var(--main-secondary-color);
        border-radius: 15px;
    }


    .separator {
        display: flex;
        align-items: center;
        text-align: center;
        padding-top: 4vh;
        font-size: x-large;
    }

    .separator::before,
    .separator::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #000;
    }

    .separator:not(:empty)::before {
        margin-right: .25em;
    }

    .separator:not(:empty)::after {
        margin-left: .25em;
    }

}

/* Header */
@media (max-width: 1500px) {


    .email-container {
        background-color: #FFFFFF;
        padding: 0.5vh 60% 0.5vh 1vh;
        border-radius: 5px;
    }

    .gmail-icon {
        display: inline-flex;
        width: 4vh;
        height: 4vh;
        margin-right: 2vh;
        margin-top: 0.5vh;
        background-image: url(../assets/gmailicon-removebg-preview.png);
        background-size: contain;
        background-repeat: no-repeat;
    }


    .gmail-icon::after {
        content: "Gmail";
        margin-left: 10vh;
        margin-top: 0.8vh;
    }


    .form-container {
        background-color: var(--main-primary-color);
        margin-top: 50%;
        border-radius: 15px;
        margin-left: 5%;
        margin-right: 5%;
        /* padding-bottom: 5vh; */
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 25px 5px 25px;
    }

    input,
    .form-button {
        background-color: #FFFFFF;
        border-color: #FFFFFF;
        border: 0;

        border-radius: 5px;

        width: 90%;
        height: 5vh;
        margin: 1%;
        text-align: center;

        font-size: 16px;

    }

    .form-button {
        margin-top: 1.5vh;
        background-color: var(--main-secondary-color);
        border-radius: 15px;
    }


    .separator {
        display: flex;
        align-items: center;
        text-align: center;
        padding-top: 2vh;
    }

    .separator::before,
    .separator::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #000;
    }

    .separator:not(:empty)::before {
        margin-right: .25em;
    }

    .separator:not(:empty)::after {
        margin-left: .25em;
    }


}
</style>