<template>
  <div>
    <slot />
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

<style>

</style>
