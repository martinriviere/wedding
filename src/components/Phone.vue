<template>
  <div class="flex flex-col items-center m-2">
    <p class="font-bold">{{ name }}</p>
    <a class="flex items-center" :href="`tel:${phone}`">
      <FontAwesome :icon="['fas', 'phone']" class="mr-2" />
      <span>{{ phone }}</span></a
    >
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
