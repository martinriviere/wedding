<template>
  <div id="app" class="flex flex-col min-h-screen bg-dark">
    <div v-if="loading" class="flex justify-center items-center h-screen">
      Loading
    </div>
    <template v-else>
      <Header v-if="$route.path !== '/'" />
      <router-view />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './components/Header.vue'
import { auth, db } from './config/firebase'

export default Vue.extend({
  components: { Header },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },
    loading() {
      return this.$store.state.loading
    },
  },
  watch: {
    loggedIn() {
      this.handleLoggedIn()
    },
    loading() {
      this.handleLoggedIn()
      // @ts-ignore
      if (this.$route.path === '/') this.$router.replace('home')
    },
  },
  created() {
    auth.onAuthStateChanged(async (user) => {
      if (!user) return
      const res = await db.collection('users').doc(user.uid).get()
      this.$store.commit('setUser', { email: user.email, id: user.uid, ...res?.data() })
    })
  },
  methods: {
    handleLoggedIn() {
      // @ts-ignore
      if (!this.loggedIn) this.$router.replace('/')
    },
  },
})
</script>

<style lang="scss">
body {
  font-family: Roboto;
}
</style>
