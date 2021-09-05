<template>
  <div>
    <g-image :src="picture" />
    <div class="px-3">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: Object,
  },
}
</script>

<style lang="scss" scoped>
div ::v-deep ul {
  list-style: disc inside;
}
</style>
