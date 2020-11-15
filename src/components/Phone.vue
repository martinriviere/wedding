<template>
  <div class="flex flex-col items-center m-2">
    <p class="font-bold">{{ name }}</p>
    <div class="flex items-center">
      <FontAwesome :icon="['fas', 'phone']" class="mr-2" />
      <span>{{ phone }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  props: {
    name: String,
    phone: String,
  },
})
</script>
