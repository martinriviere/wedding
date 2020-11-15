<template>
  <div class="background bg-cover">
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
      <CountDown class="text-xl sm:text-4xl text-gray-400 font-baskerville" />
    </div>
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
.background {
  background-image: url("../assets/img/fern.jpg");
}
#logo {
  width: 500px;
}
@media screen and (max-width: 639px) {
  #logo {
    width: 200px;
  }
}
</style>
