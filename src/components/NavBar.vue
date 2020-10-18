<template>
    <ul
      :class="[
        mobileVisible
          ? 'transform translate-x-0'
          : 'transform translate-x-full sm:translate-x-0',
        'flex flex-col sm:flex-row sm:items-center sm:w-full px-4 py-2 sm:px-10 sm:py-5 bg-dark fixed sm:static top-0 bottom-0 right-0 transition-transform duration-500 ease-out',
      ]"
    >
      <div
        class="text-white text-3xl ml-auto mb-5 sm:hidden"
        @click="$emit('close')"
      >
        <FontAwesome :icon="['fas', 'times']" />
      </div>
      <li
        v-for="item in pages"
        :key="item.label"
        :class="[
          selected === item.link ? 'text-grey' : 'text-white',
          'my-1 sm:my-0 sm:mr-5 text-xl',
        ]"
      >
        <g-link :to="item.link">{{ item.label }}</g-link>
      </li>
    </ul>
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
  computed: {
    selected() {
      // @ts-ignore
      return this.$route.path
    },
  },
})
</script>