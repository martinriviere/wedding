<template>
  <div class="w-screen">
    <div
      class="flex items-center justify-between w-full px-4 py-2 sm:px-10 sm:py-5 border-b-2"
    >
      <g-image src="../assets/img/logo.png" id="logo" alt="Logo" width="150" />
      <CountDown class="text-sm sm:text-xl text-dark" />
      <div class="sm:hidden">
        <FontAwesome :icon="['fas', 'bars']" class="text-dark" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CountDown from "./CountDown.vue"

export default Vue.extend({
  components: { CountDown },
  data: () => {
    mobileMenuVisible: false
  },
})
</script>

<style>
#logo {
  width: 150px;
}
@media screen and (max-width: 767px) {
  #logo {
    width: 75px;
  }
}
</style>
