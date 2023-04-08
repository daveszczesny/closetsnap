

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
import { getData } from '@/scripts/db_read_user';

export default {
  data() {
    return {
      logState: "",
      sideBarDisplay: false,
      auth: false,
      name: "" as string,
    }
  },
  mounted() {

    this.sideBarDisplay = false;

    getAuth().onAuthStateChanged((user) => {
      if (user) {
        this.auth = true;
        getData("name").then((name) => {
          this.name = name;
        })
      } else {
        this.auth = false;
      }
    })
  },

  methods: {
    goHome() {
      //@ts-ignore
      this.$router.push('/');
    },

  }

}

</script>

<style>
.sidebarButton {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-size: xx-large;
  user-select: none;
  float: right;

}

.wrapper {
  display: flex;
  flex-direction: column;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: calc(100% - 15vh);
  background-color: var(--main-primary-color);
  margin-top: 15vh;
}

.sidebar .nav-link {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  text-decoration: none;
  -webkit-text-fill-color: black;
  font-size: x-large;

  margin-left: 5vh;
  margin-top: 3vh;

}


.sidebar.collapsed {
  width: 0;
}

@media (min-width: 1500px) {

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh;
    background-color: #FFFFFF;
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
}
</style>
