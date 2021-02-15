<template>
  <div
    :class="[
      mobileVisible ? 'right-0' : '-right-full',
      'bg-dark fixed md:static top-0 bottom-0 transition-all duration-500 ease-out z-10',
    ]"
  >
    <div class="flex flex-col md:flex-row md:items-center px-4 py-2 md:py-5">
      <div class="text-white text-3xl ml-auto mb-5 md:hidden" @click="$emit('close')">
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
      <span class="my-1 md:my-0 md:mr-5 text-white text-xl md:text-base cursor-pointer" @click="logOut"
        >Déconnexion</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '../config/firebase'

const pages: { label: string; link: string }[] = [
  {
    label: 'Accueil',
    link: '/home',
  },
  {
    label: 'Informations',
    link: '/info',
  },
  {
    label: 'RSVP',
    link: '/response',
  },
  {
    label: 'Team',
    link: '/team',
  },
  {
    label: 'Photos',
    link: '/pictures',
  },
  {
    label: 'Mairie',
    link: '/mairie',
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
  methods: {
    logOut() {
      auth.signOut()
    },
  },
})
</script>
