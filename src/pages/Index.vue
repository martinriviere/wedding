<template>
  <div class="container">
    <h1>MM</h1>
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
  background-image: url("../assets/img/background.jpg");
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
  color: #d4af37;
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 50px;
  }
}
</style>
