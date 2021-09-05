<template>
  <div class="container mx-auto">
    <slot />
  </div>
</template>

<script>
import Header from "../components/Header.vue"

export default {
  components: {
    Header,
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
