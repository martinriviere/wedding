<template>
  <div class="relative">
    <g-image
      :src="activity.node.picture"
    />
    <div
      class="absolute opacity-0 md:hover:opacity-100 flex items-center p-12 bg-black bg-opacity-50 inset-0"
    >
      <div class="text-white" v-html="activity.node.content" />
    </div>
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
  list-style: disc;
}
</style>
