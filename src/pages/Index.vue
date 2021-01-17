<template>
  <div class="background bg-cover">
    <div
      class="container h-screen mx-auto flex flex-col justify-center items-center"
    >
      <g-image
        src="../assets/img/logo.png"
        id="logo"
        alt="Logo"
        class="mb-16"
        width="500"
      />
      <CountDown class="text-xl sm:text-4xl text-gray-400 font-baskerville" />
      <form @submit="login">
        <input type="text" v-model="email" />
        <input type="password" v-model="password" />
        <input type="submit" value="Connexion" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CountDown from "../components/CountDown.vue"
import firebase from "firebase/app"

export default Vue.extend({
  components: { CountDown },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async login(e: Event) {
      e.preventDefault()
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(
            `${this.email}@manonetmartin.fr`,
            this.password
          )
        // @ts-ignore
        this.$router.replace("/accueil")
      } catch (e) {
        console.log(e)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.background {
  background-image: url("../assets/img/fern.jpg");
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
