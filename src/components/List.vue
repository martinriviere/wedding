<template>
   <div class="w-full relative">
    <BackButton :link="backButtonLink" />
    <div class="container mx-auto flex flex-col items-center">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BackButton from '../components/BackButton.vue'

export default Vue.extend({
  components: {
    BackButton,
  },
  props: {
    data: Array,
    backButtonLink: String,
  },
})
</script>
