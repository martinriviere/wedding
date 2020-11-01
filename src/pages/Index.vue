<template>
  <div
    class="container h-screen mx-auto flex flex-col justify-center items-center"
  >
    <g-image
      src="../assets/img/logo.png"
      id="logo"
      alt="Logo"
      class="mb-16"
      width="500"
    />
    <CountDown class="text-xl sm:text-4xl text-gray-400" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CountDown from "../components/CountDown.vue"

export default Vue.extend({
  components: { CountDown },
})
</script>

<style lang="scss" scoped>
.container {
  font-family: "Libre Baskerville", serif;
}
#logo {
  width: 500px;
}
@media screen and (max-width: 767px) {
  #logo {
    width: 200px;
  }
}
</style>
