<template>
  <div>
    <g-image :src="picture" />
    <div class="px-3">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    picture: Object,
  },
})
</script>

<style lang="scss" scoped>
div ::v-deep ul {
  list-style: disc inside;
}
</style>
