<template>
  <div class="flex flex-grow bg-dark bg-opacity-75">
    <div class="container mx-auto px-10">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Header from "../components/Header.vue"

export default Vue.extend({
  components: {
    Header,
  },
})
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
