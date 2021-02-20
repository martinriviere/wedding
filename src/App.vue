<template>
  <div id="app" class="flex flex-col min-h-screen bg-dark">
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <Loader color="#a37b55" />
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
    user() {
      return this.$store.state.user
    },
    loading() {
      return this.$store.state.loading
    },
    mairie() {
      return this.$store.state.user?.mairie
    },
  },
  watch: {
    user(val) {
      // @ts-ignore
      const { path } = this.$route
      // @ts-ignore
      if (path === '/' && !val) return
      // @ts-ignore
      if (path !== '/' && !val) return this.$router.replace('/')
      // @ts-ignore
      if (path === '/' || (path ==='/mairie' && !this.mairie)) this.$router.replace('/home')
    },
  },
  mounted() {
    auth.onAuthStateChanged(async (user) => {
      if (!user) return this.$store.commit('setUser', null)
      const res = await db.collection('users').doc(user.uid).get()
      this.$store.commit('setUser', { email: user.email, id: user.uid, ...res?.data() })
    })
  },
})
</script>

<style lang="scss">
body {
  font-family: Roboto;
}
</style>
