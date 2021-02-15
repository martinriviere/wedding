<template>
  <div class="w-full">
    <div class="container mx-auto flex flex-col items-center">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListTile from '../components/ListTile.vue'

export default Vue.extend({
  components: {
    ListTile,
  },
  props: {
    data: Array,
  },
})
</script>
