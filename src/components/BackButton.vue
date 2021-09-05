<template>
  <div class="absolute h-full p-4 sm:hidden pointer-events-none">
    <div
      class="bg-white text-dark h-10 w-10 rounded-full flex justify-center items-center sticky sticky-button pointer-events-auto"
    >
      <g-link :to="link">
        <FontAwesome :icon="['fas', 'chevron-left']" size="lg" />
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
  },
}
</script>

<style scoped>
.sticky-button {
  top: calc(1rem + 58.55px);
}
</style>
