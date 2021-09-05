<template>
  <div
    :class="[
      mobileVisible ? 'right-0' : '-right-full',
      'bg-dark md:bg-transparent fixed md:static top-0 bottom-0 transition-all duration-500 ease-out z-50',
    ]"
  >
    <div class="flex flex-col md:flex-row md:items-center px-4 py-2">
      <div class="text-white text-3xl ml-auto mb-5 md:hidden" @click="$emit('close')">
        <FontAwesome :icon="['fal', 'times']" />
      </div>
      <div
        v-for="item in filteredPages"
        :key="item.label"
        :class="['group my-1 md:my-0 md:mr-5', isSticky ? 'text-grey-dark' : 'text-white']"
      >
        <g-link :to="item.link" class="text-xl md:text-base" active-class="text-grey-light">
          <span @click="$emit('close')">{{ item.label }}</span>
        </g-link>
        <div
          v-if="item.submenus"
          :class="[
            'flex flex-col ml-3 md:hidden md:group-hover:flex md:rounded md:ml-0 md:p-3 md:absolute',
            isSticky ? 'bg-white text-grey-dark' : 'bg-dark text-white',
          ]"
        >
          <g-link
            v-for="sub in item.submenus"
            :to="sub.link"
            :key="sub.label"
            class="my-1 md:my-0 md:mr-5 md:text-base"
            active-class="text-grey-light"
          >
            <span @click="$emit('close')">{{ sub.label }}</span>
          </g-link>
        </div>
      </div>
      <span class="my-1 md:my-0 md:mr-5 text-white text-xl md:text-base cursor-pointer" @click="logOut"
        >Déconnexion</span
      >
    </div>
  </div>
</template>

<script>
import { auth } from '../config/firebase'

const pages = [
  {
    label: 'Accueil',
    link: '/home',
  },
  {
    label: 'Informations',
    link: '/info',
    submenus: [
      {
        label: 'Transport',
        link: '/transport',
      },
      {
        label: 'Activités',
        link: '/activities',
      },
      {
        label: 'Hébergement',
        link: '/accomodation',
      },
    ],
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
  {
    label: 'Photos',
    link: '/photos',
  }
]

export default {
  components: {},
  props: {
    mobileVisible: Boolean,
    isSticky: Boolean,
  },
  computed: {
    filteredPages() {
      return pages.filter(
        (page) => !page.protected || (this.$store.state.user && this.$store.state.user[page.protected]),
      )
    },
  },
  methods: {
    logOut() {
      if (!auth) return
      auth.signOut()
    },
  },
}
</script>
