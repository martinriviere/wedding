<template>
  <div
    ref="header"
    :class="[
      'flex items-center justify-between px-4 py-2 sm:px-10 sticky top-0 transition-colors duration-500 ease-in-out z-50',
      isSticky ? 'bg-white shadow' : 'bg-dark',
    ]"
  >
    <g-link to="/home"><g-image src="../assets/img/logo.png" id="logo" alt="Logo"/></g-link>
    <CountDown class="text-sm sm:text-lg text-gray-400 text-center mx-5 flex-1" />
    <div
      v-show="mobileNavBarVisible"
      @click="closeMobileNavBar"
      class="w-screen h-screen bg-dark bg-opacity-50 absolute top-0 left-0 z-10"
    />
    <NavBar :mobileVisible="mobileNavBarVisible" @close="closeMobileNavBar" ref="navBar" :isSticky="isSticky" />
    <div class="lg:hidden text-white text-3xl" @click="openMobileNavBar">
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
  data() {
    return {
      mobileNavBarVisible: false,
      currentScrollPosition: 0,
      isSticky: false,
    }
  },
  watch: {
    currentScrollPosition(val) {
      // const header = this.$refs.header as Element
      // if (!header) return
      // this.isSticky = val >= parseInt(window.getComputedStyle(header).height.slice(0, -2))
    },
  },
  methods: {
    openMobileNavBar() {
      this.mobileNavBarVisible = true
      disableBodyScroll(this.$refs.navBar as Element)
    },
    closeMobileNavBar() {
      this.mobileNavBarVisible = false
      enableBodyScroll(this.$refs.navBar as Element)
    },
    onScroll() {
      this.currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
})
</script>

<style>
#logo {
  width: 85px;
}
@media screen and (max-width: 639px) {
  #logo {
    width: 75px;
  }
}
</style>
