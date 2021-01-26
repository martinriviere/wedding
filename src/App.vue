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
import Vue from "vue"
import Header from "./components/Header.vue"
import { auth } from "./config/firebase"

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
      if (this.$route.path === "/") this.$router.replace("home")
    },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.$store.commit(
        "setUser",
        user ? { email: user.email, displayName: user.displayName } : null
      )
    })
  },
  methods: {
    handleLoggedIn() {
      // @ts-ignore
      if (!this.loggedIn) this.$router.replace("/")
    },
  },
})
</script>

<style lang="scss">
body {
  font-family: Roboto;
}
</style>
