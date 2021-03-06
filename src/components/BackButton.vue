<template>
  <div class="absolute h-full p-4 sm:hidden">
    <g-link :to="link">
      <div class="bg-white text-dark h-10 w-10 rounded-full flex justify-center items-center sticky sticky-button">
        <FontAwesome :icon="['fas', 'chevron-left']" size="lg"/>
      </div>
    </g-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: String,
  },
})
</script>

<style scoped>
  .sticky-button {
    top: calc(1rem + 58.55px)
  }
</style>