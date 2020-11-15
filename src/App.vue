<template>
  <div id="app" class="flex flex-col min-h-screen bg-dark">
    <Header v-if="$route.path !== '/'" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Header from "./components/Header.vue"

export default Vue.extend({
  components: { Header },
})
</script>

<style lang="scss">
body {
  font-family: Roboto;
}
</style>