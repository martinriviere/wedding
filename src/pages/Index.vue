<template>
  <div class="container">
    <g-image src="../assets/img/logo.png" id="logo" />
    <CountDown />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CountDown from "~/components/CountDown.vue"

export default Vue.extend({
  components: { CountDown },
})
</script>

<style lang="scss">
body {
  background-image: url("../assets/img/background.png");
  background-size: cover;
}
</style>

<style lang="scss" scoped>
.container {
  font-family: "Libre Baskerville", serif;
  max-width: 800px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  font-size: 100px;
  font-size: 100px;
  color: #d4af37;
}
#logo {
  width: 500px;
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 50px;
  }
  #logo {
    width: 200px;
  }
}
</style>
