<template>
  <button
    @click="$emit('click')"
    :disabled="loading || disabled"
    :class="[
      'mt-3 py-1 px-3 rounded self-center bg-gold text-white flex items-center',
      { 'opacity-50': loading || disabled },
    ]"
  >
    <Loader v-if="loading" color="white" size="10px" />
    <span v-else>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: String,
    loading: Boolean,
    disabled: Boolean,
  },
})
</script>
