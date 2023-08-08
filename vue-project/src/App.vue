

<template>
  <div class="app-nav-bar" :class="{ 'sidebar-open': sidebarOpen }">
    <header v-if="!sidebarOpen">
      <img id="menubar" class="menubar" @click="toggleSidebar" src="./assets/menubar.png">
      <p class="webname">CLOSET SNAP</p>
      <img id="webuser" class="menubar user" src="./assets/user.png">
    </header>
    <router-view></router-view>
  </div>
  <Sidebar v-if="sidebarOpen" @close="closeSidebar" />
</template>


<script lang="ts">


import Header from './components/header.vue'
import Sidebar from './components/overlay.vue'

export default {
  components: {
    Header,
    Sidebar,
  },

  data() {
    return {
      sidebarOpen: false,
    }
  },

  mounted(){
    const para = document.querySelector('.webname') as HTMLParagraphElement;
    para.addEventListener('click', ()=>{
      //@ts-ignore
      this.$router.push('/');
    });
    const img = document.querySelector('#webuser') as HTMLImageElement;
    img.addEventListener('click', () => {
      //@ts-ignore
      this.$router.push('/Account');
    })
  },

  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },

    closeSidebar() {
      this.sidebarOpen = false;
    }
  }
}

</script>

<style>


.sidebar-open {
  display: none;
}

header {
  display: flex;
  flex-direction: row;


  /* fixes the navbar to the top of the screen */
  position: sticky;
  top:0;

}

.webname {
  text-indent: 3vh;
  margin-top: 1.6vh;
  color: var(--main-text-color);
  font-family: 'Nunito', sans-serif;
}

@media only screen and (min-device-width: 32px) and (max-device-width: 480px){
  .webname {
    font-size: 20px;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .webname{
    font-size: 25px;
  }
}

@media only screen and (min-device-width: 1025px){
    .webname{
        font-size: 25px;
    }
}

.menubar {
  margin-top: 0.5vh;
  width: 5vh;
  height: 5vh;

}

.user {
  margin-left: auto;

}
</style>

