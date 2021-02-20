<template>
  <div
    :class="[
      mobileVisible ? 'right-0' : '-right-full',
      'bg-dark fixed lg:static top-0 bottom-0 transition-all duration-500 ease-out z-10',
    ]"
  >
    <div class="flex flex-col lg:flex-row lg:items-center px-4 py-2 lg:py-5">
      <div class="text-white text-3xl ml-auto mb-5 lg:hidden" @click="$emit('close')">
        <FontAwesome :icon="['fas', 'times']" />
      </div>
      <g-link
        v-for="item in filteredPages"
        :to="item.link"
        @click="$emit('close')"
        :key="item.label"
        class="my-1 lg:my-0 lg:mr-5 text-white text-xl lg:text-base"
        active-class="text-grey-light"
      >
        <span @click="$emit('close')">{{ item.label }}</span>
      </g-link>
      <span class="my-1 lg:my-0 lg:mr-5 text-white text-xl lg:text-base cursor-pointer" @click="logOut"
        >Déconnexion</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '../config/firebase'

const pages = [
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
    label: 'Mairie',
    link: '/mairie',
    protected: 'mairie',
  },
]

export default Vue.extend({
  components: {},
  props: {
    mobileVisible: Boolean,
  },
  computed: {
    filteredPages() {
      return pages.filter(
        // @ts-ignore
        (page) => !page.protected || (this.$store.state.user && this.$store.state.user[page.protected]),
      )
    },
  },
  methods: {
    logOut() {
      auth.signOut()
    },
  },
})
</script>
