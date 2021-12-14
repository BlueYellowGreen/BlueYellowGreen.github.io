<template>
  <SideNavBar />

  <div id="APP" class="container">
    <div class="row">

      <div class="offset-2 col-8">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import SideNavBar from '@/components/SideNavBar.vue'

export default {
  components: {
    SideNavBar
  }
}
</script>

<style>
@font-face {
  font-family: 'S-CoreDream-3Light';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: S-CoreDream-3Light;
}

::selection { background-color: #20c9968f; }
</style>
