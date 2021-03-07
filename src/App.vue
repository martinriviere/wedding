<template>
  <div id="app" class="bg-dark text-grey-dark">
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <Loader color="#a37b55" />
    </div>
    <div v-else class="relative flex flex-col min-h-screen pb-12">
      <Header v-if="$route.path !== '/'" />
      <router-view />
      <Footer v-if="$route.path !== '/'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { auth, db } from './config/firebase'

export default Vue.extend({
  components: { Header, Footer },
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
    if (!auth || !db) return
    auth.onAuthStateChanged((user) => {
      if (!db) return
      if (!user) return this.$store.commit('setUser', null)
      db.collection('users').doc(user.uid).onSnapshot((doc) => {
        this.$store.commit('setUser', { email: user.email, id: user.uid, ...doc.data() })
      })
    })
  },
})
</script>

<style lang="scss">
body {
  font-family: 'PT Sans';
}

.background-flower {
  background-image: url('./assets/img/flower.png');
}

.background-fern {
  background-image: url('./assets/img/fern.jpg');
}
</style>
