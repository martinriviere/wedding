<template>
  <div>
    <g-image :src="activity.picture" />
    <div class="px-3">
      <h2 class="text-lg text-gold">{{ activity.title }}</h2>
      <div v-html="activity.content" class="text-gray-400" />
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
  list-style: disc inside;
}
</style>
