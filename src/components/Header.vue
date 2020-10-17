<template>
  <g-image src="../assets/img/logo.png" id="logo" class="mb-16" />
</template>

<script lang="ts">
import Vue from "vue"
import CountDown from "~/components/CountDown.vue"

export default Vue.extend({
  components: { CountDown },
})
</script>

<style>
#logo {
  width: 500px;
}
@media screen and (max-width: 767px) {
  #logo {
    width: 200px;
  }
}
</style>
