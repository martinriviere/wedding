<template>
  <div class="flex items-center justify-between px-4 py-2 sm:px-10 sm:py-5">
    <g-link to="/home"><g-image src="../assets/img/logo.png" id="logo" alt="Logo" width="150"/></g-link>
    <CountDown class="text-sm lg:text-lg text-gray-400 text-center mx-5 flex-1" />
    <div
      v-show="mobileNavBarVisible"
      @click="closeMobileNavBar"
      class="w-screen h-screen bg-dark bg-opacity-50 absolute top-0 left-0 z-10"
    />
    <NavBar :mobileVisible="mobileNavBarVisible" @close="closeMobileNavBar" ref="navBar" />
    <div class="md:hidden text-white text-3xl" @click="openMobileNavBar">
      <FontAwesome :icon="['fas', 'bars']" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import CountDown from './CountDown.vue'
import NavBar from './NavBar.vue'

export default Vue.extend({
  components: { CountDown, NavBar },
  data: () => ({
    mobileNavBarVisible: false,
  }),
  methods: {
    openMobileNavBar() {
      this.mobileNavBarVisible = true
      // @ts-ignore
      disableBodyScroll(this.$refs.navBar)
    },
    closeMobileNavBar() {
      this.mobileNavBarVisible = false
      // @ts-ignore
      enableBodyScroll(this.$refs.navBar)
    },
  },
})
</script>

<style>
#logo {
  width: 125px;
}
@media screen and (max-width: 639px) {
  #logo {
    width: 75px;
  }
}
</style>
