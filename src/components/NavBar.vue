<template>
  <div
    :class="[
      mobileVisible
        ? 'right-0'
        : '-right-full',
      'bg-dark fixed md:static top-0 bottom-0 transition-all duration-500 ease-out flex-1',
    ]"
  >
    <div class="flex flex-col md:flex-row md:items-center px-4 py-2 md:py-5">
      <div
        class="text-white text-3xl ml-auto mb-5 md:hidden"
        @click="$emit('close')"
      >
        <FontAwesome :icon="['fas', 'times']" />
      </div>
      <g-link
        v-for="item in pages"
        :to="item.link"
        @click="$emit('close')"
        :key="item.label"
        class="my-1 md:my-0 md:mr-5 text-white text-xl md:text-base"
        active-class="text-grey-light"
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
    label: "Informations",
    link: "/infos",
  },
  {
    label: "RSVP",
    link: "/reponse",
  },
  {
    label: "Photos",
    link: "/photos",
  },
  {
    label: "Mairie",
    link: "/mairie",
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
