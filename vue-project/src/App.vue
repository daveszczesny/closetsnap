

<template>
  <div class="container">

    <header>
      <div class="logo">
        <img @click="goHome" class="img-responsive" src="./assets/logo.png">
      </div>
     
    </header>
  </div>

  <router-view></router-view>
</template>


<script lang="ts">

import { getAuth } from '@firebase/auth';

export default {
  data() {
    return {
      logState : ""
    }
  },
  mounted() {
    if (getAuth().currentUser == null) {
      this.logState = "Log in"
    }else{
      this.logState = "Log out"
    }
  },

  methods:{
    goHome(){
      //@ts-ignore
      this.$router.push('/');
    }
  }

}

</script>

<style scoped>
@media (min-width: 1500px) {

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh;
    background-color: #FFFFFF;
  }


  nav {
    display: flex;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: space-between;
    margin-right: 30%;
  }

  .nav-link {
    margin-right: 10vh;
    display: flex;
    list-style: none;
    white-space: nowrap;
    text-decoration: none;
    color: var(--main-secondary-color);
    font-weight: bold;
  }
}


@media (max-width: 1500px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .img-responsive {
    max-width: max-content;
    height: auto;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-link {
    margin: 1vh 2vh;
    white-space: nowrap;
    list-style: none;
    text-decoration: none;
    color: var(--main-secondary-color);
    font-weight: bold;
  }
}
</style>
