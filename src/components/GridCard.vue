<template>
  <div class="relative">
    <g-image :src="picture" />
    <div
      class="absolute hidden md:flex opacity-0 md:hover:opacity-100 p-6 lg:p-12 bg-black bg-opacity-50 inset-0 overflow-auto"
    >
      <slot />
    </div>
    <g-link :to="`${$route.path.replace(/\/$/, '')}-list#${id}`" class="absolute inset-0 md:hidden" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    id: String,
    picture: Object,
  },
})
</script>

<style lang="scss" scoped>
div ::v-deep ul {
  list-style: disc inside;
}
</style>
