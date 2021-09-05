<template>
  <button
    @click="$emit('click')"
    :disabled="loading || disabled"
    :class="[
      buttonClass || 'mt-3 py-1 px-3 rounded self-center bg-gold text-white flex items-center',
      { 'opacity-50': loading || disabled },
    ]"
  >
    <Loader v-if="loading" color="white" size="10px" />
    <span v-else>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    loading: Boolean,
    disabled: Boolean,
    buttonClass: String,
  },
}
</script>
