<template>
  <div
    :class="[
      mobileVisible
        ? 'transform translate-x-0'
        : 'transform translate-x-full sm:translate-x-0',
      'sm:w-full bg-dark fixed sm:static top-0 bottom-0 right-0 transition-transform duration-500 ease-out',
    ]"
  >
    <div
      class="sm:container sm:mx-auto flex flex-col sm:flex-row sm:items-center px-4 py-2 sm:py-5 sm:px-10"
    >
      <div
        class="text-white text-3xl ml-auto mb-5 sm:hidden"
        @click="$emit('close')"
      >
        <FontAwesome :icon="['fas', 'times']" />
      </div>
      <g-link
        v-for="item in pages"
        :to="item.link"
        @click="$emit('close')"
        :key="item.label"
        class="my-1 sm:my-0 sm:mr-5 text-xl text-white"
        active-class="text-grey"
      >
        <span @click="$emit('close')">{{ item.label }}</span>
      </g-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

const pages: { label: string; link: string }[] = [
  {
    label: "Accueil",
    link: "/accueil",
  },
  {
    label: "Programme",
    link: "/programme",
  },
]

export default Vue.extend({
  props: {
    mobileVisible: Boolean,
  },
  data() {
    return {
      pages,
    }
  },
})
</script>
