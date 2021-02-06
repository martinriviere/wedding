<template>
  <div class="bg-white flex flex-grow flex-wrap">
    <div class="bg-flower flex flex-col w-screen sm:w-1/2 items-center justify-center">
      <h2 class="text-3xl font-bold text-gold">RSVP</h2>
      <h3 class="text-xl">Avant le 15 avril 2021</h3>
    </div>
    <div class="flex flex-col w-screen sm:w-1/2 justify-center items-start px-20 sm:px-10">
      <label><input type="radio" :value="true" v-model="attends" class="mr-1" />seront ravis d'être à vos côtés</label>
      <transition
        enter-active-class="transition duration-500"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <div class="flex flex-col" v-show="attends">
          <label><input type="number" v-model="adults" class="w-10 mr-1" min="1" />adultes</label>
          <label><input type="number" v-model="children" class="w-10 mr-1" min="0" />enfants</label>
        </div>
      </transition>
      <label><input type="radio" :value="false" v-model="attends" class="mr-1" />ne pourront hélas être là</label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      attends: undefined,
      adults: 1,
      children: 0,
    }
  },
})
</script>
