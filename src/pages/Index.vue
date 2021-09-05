<template>
  <div class="background-fern bg-cover">
    <div class="container h-screen mx-auto flex flex-col justify-center items-center">
      <g-image src="../assets/img/logo.png" id="logo" alt="Logo" class="mb-16" width="500" />
      <p class="text-xl sm:text-4xl text-gray-400 font-baskerville">
        Les photos sont arrivées !
      </p>
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
        <FormButton
          label="Connexion"
          :loading="loading"
          :disabled="disabled"
          buttonClass="my-1 bg-dark rounded text-gold"
        />
      </form>
      <p v-if="error" class="text-white text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import CountDown from '../components/CountDown.vue'
import { auth } from '../config/firebase'

export default {
  components: { CountDown },
  data() {
    return {
      email: '',
      password: '',
      error: '',
      loading: false,
    }
  },
  computed: {
    disabled() {
      return !this.email || !this.password
    },
  },
  watch: {
    email() {
      this.error = ''
    },
    password() {
      this.error = ''
    },
  },
  methods: {
    async login() {
      if (!auth) return
      try {
        this.loading = true
        await auth.signInWithEmailAndPassword(`${this.email}@manonetmartin.fr`, `pass${this.password}word`)
        this.$router.replace('/home')
      } catch (e) {
        this.loading = false
        if (['auth/user-not-found', 'auth/wrong-password', 'auth/invalid-email'].includes(e.code))
          this.error = "Nom d'utilisateur ou mot de passe incorrect"
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#logo {
  width: 500px;
}
@media screen and (max-width: 639px) {
  #logo {
    width: 200px;
  }
}
</style>
