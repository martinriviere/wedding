<template>
  <div class="relative">
    <g-image :src="getImage" immediate class="h-full w-full object-cover card" />
    <div
      class="sm:opacity-0 sm:hover:opacity-100 flex flex-col justify-center items-center absolute bg-dark bg-opacity-50 h-full w-full top-0"
    >
      <p class="text-white font-bold">{{ info.title }}</p>
      <p class="text-white">{{ info.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  props: {
    info: Object,
  },
  computed: {
    getImage() {
      return require(`!!assets-loader!@images/${this.info.img}`)
    },
  },
})
</script>
