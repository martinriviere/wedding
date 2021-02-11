<template>
  <div class="relative">
    <g-link :to="`activities-list#${activity.id}`">
      <g-image :src="activity.picture" />
    </g-link>
    <div
      class="absolute hidden md:flex opacity-0 md:hover:opacity-100 items-center p-12 bg-black bg-opacity-50 inset-0"
    >
      <div class="text-white" v-html="activity.content" />
    </div>
    <g-link :to="`activities-list#${activity.id}`" class="absolute inset-0 md:hidden" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  props: {
    activity: Object,
  },
})
</script>

<style lang="scss" scoped>
div ::v-deep ul {
  list-style: disc inside;
}
</style>
