<template>
   <div class="w-full relative">
    <BackButton :link="backButtonLink" />
    <div class="container mx-auto flex flex-col items-center">
      <slot />
    </div>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue'

export default {
  components: {
    BackButton,
  },
  props: {
    data: Array,
    backButtonLink: String,
  },
}
</script>
