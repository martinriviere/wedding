<template>
  <div class="background bg-cover">
    <div class="container h-screen mx-auto flex flex-col justify-center items-center">
      <g-image src="../assets/img/logo.png" id="logo" alt="Logo" class="mb-16" width="500" />
      <CountDown class="text-xl sm:text-4xl text-gray-400 font-baskerville" />
      <form @submit.prevent="login" class="flex flex-col my-4">
        <input
          type="text"
          v-model="email"
          class="my-1 px-2 py-1 bg-dark rounded text-white"
          placeholder="Nom d'utilisateur"
        />
        <input
          type="password"
          v-model="password"
          class="my-1 px-2 py-1 bg-dark rounded text-white"
          placeholder="Mot de passe"
        />
        <input type="submit" value="Connexion" class="my-1 bg-dark rounded text-gold" />
      </form>
      <p v-if="error" class="text-white text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CountDown from '../components/CountDown.vue'
import { auth } from '../config/firebase'

export default Vue.extend({
  components: { CountDown },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async login() {
      if (!auth) return
      try {
        await auth.signInWithEmailAndPassword(`${this.email}@manonetmartin.fr`, `pass${this.password}word`)
        // @ts-ignore
        this.$router.replace('/home')
      } catch (e) {
        if (['auth/user-not-found', 'auth/wrong-password'].includes(e.code))
          this.error = "Nom d'utilisateur ou mot de passe incorrect"
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/img/fern.jpg');
}
#logo {
  width: 500px;
}
@media screen and (max-width: 639px) {
  #logo {
    width: 200px;
  }
}
</style>
