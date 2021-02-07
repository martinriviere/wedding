<template>
  <div class="bg-white flex flex-grow flex-wrap">
    <div class="bg-flower bg-cover flex flex-col w-screen sm:w-1/2 items-center justify-center">
      <h2 class="text-3xl font-bold text-gold">RSVP</h2>
      <h3 class="text-xl">Avant le 15 avril 2021</h3>
    </div>
    <div class="flex flex-col w-screen sm:w-1/2 justify-center items-start px-20 sm:px-10">
      <label><input type="radio" :value="true" v-model="attends" class="mr-1" />seront ravis d'être à vos côtés</label>
      <transition enter-active-class="transition duration-500" enter-class="opacity-0" enter-to-class="opacity-100">
        <div class="flex flex-col ml-2" v-show="attends">
          <label>
            <input type="number" v-model="adults" class="w-7 mr-1" min="1" max="9" />adulte{{ adults > 1 ? 's' : '' }}
          </label>
          <label>
            <input type="number" v-model="children" class="w-7 mr-1" min="0" max="9" />enfant{{
              children > 1 ? 's' : ''
            }}
          </label>
          <label><input type="checkbox" v-model="dinner" class="mr-1" min="0" />au dîner</label>
          <label><input type="checkbox" v-model="brunch" class="mr-1" min="0" />au brunch</label>
          <label class="flex flex-col my-1">
            Pour le plat principal, avez-vous un régime alimentaire particulier ? (sans gluten, végétarien, vegan...)
            <textarea v-model="diet" class="border rounded border-gold" />
          </label>
        </div>
      </transition>
      <label class="mt-2"
        ><input type="radio" :value="false" v-model="attends" class="mr-1" />ne pourront hélas être là</label
      >
      <button
        @click="submit"
        :disabled="disabled"
        :class="['mt-3 py-1 px-3 rounded self-center bg-gold text-white', { 'opacity-50': disabled }]"
      >
        Envoyer
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { deleteField } from '../config/firebase'
export default Vue.extend({
  data() {
    return {
      attends: undefined,
      adults: 1,
      children: 0,
      dinner: true,
      brunch: true,
      diet: '',
    }
  },
  computed: {
    userRef() {
      return this.$store.getters.userRef
    },
    disabled() {
      // @ts-ignore
      return typeof this.attends === 'undefined'
    },
  },
  async mounted() {
    const doc = await this.userRef.get()
    if (!doc.exists) return
    const { attends, adults, children, dinner, brunch, diet } = doc.data()
    this.attends = attends
    if (!attends) return
    this.adults = adults
    this.children = children
  },
  methods: {
    async submit() {
      if (typeof this.attends === 'undefined') {
        console.log('No option selected')
        return
      }
      const { attends, adults, children, dinner, brunch, diet } = this
      const data = {
        attends,
        adults: this.removeIfNeeded(adults),
        children: this.removeIfNeeded(children),
        dinner: this.removeIfNeeded(dinner),
        brunch: this.removeIfNeeded(brunch),
        diet: this.removeIfNeeded(diet),
      }
      try {
        await this.userRef.update(data)
        console.log('Document successfully updated')
      } catch (e) {
        console.log(e)
      }
    },
    removeIfNeeded(field: any) {
      return this.attends ? field : deleteField()
    },
  },
})
</script>
