<template>
  <div class="bg-white flex flex-grow flex-wrap">
    <div class="flex flex-col w-screen sm:w-1/2 items-center justify-center relative">
      <div class="bg-flower bg-cover w-full h-full absolute opacity-25" />
      <h2 class="text-3xl font-bold text-gold">RSVP</h2>
      <h3 class="text-xl">Avant le 15 avril 2021</h3>
    </div>
    <div class="w-screen sm:w-1/2 flex justify-center">
      <div v-if="loading" class="flex justify-center items-center">
        <Loader color="#a37b55" />
      </div>
      <div class="flex flex-col justify-center items-start px-20 sm:px-10" v-else>
        <template v-if="underEdit">
          <label
            ><input type="radio" :value="true" v-model="attends" class="mr-1" />seront ravis d'être à vos côtés</label
          >
          <transition enter-active-class="transition duration-500" enter-class="opacity-0" enter-to-class="opacity-100">
            <div class="flex flex-col ml-2" v-show="attends">
              <label>
                <input type="number" v-model.number="adults" class="w-7 mr-1" min="1" max="9" />adulte{{
                  adults > 1 ? 's' : ''
                }}
              </label>
              <label>
                <input type="number" v-model.number="children" class="w-7 mr-1" min="0" max="9" />enfant{{
                  children > 1 ? 's' : ''
                }}
              </label>
              <label><input type="checkbox" v-model="dinner" class="mr-1" min="0" />au dîner</label>
              <label><input type="checkbox" v-model="brunch" class="mr-1" min="0" />au brunch</label>
              <label class="flex flex-col my-1">
                Pour le plat principal, avez-vous un régime alimentaire particulier ? (sans gluten, végétarien,
                vegan...)
                <textarea v-model="diet" class="border rounded border-gold py-1 px-2" />
              </label>
            </div>
          </transition>
          <label class="mt-2"
            ><input type="radio" :value="false" v-model="attends" class="mr-1" />ne pourront hélas être là</label
          >
          <FormButton label="Envoyer" :loading="pending" :disabled="disabled" @click="submit" />
        </template>
        <template v-else>
          <div v-if="!attends">
            Nous ne pourrons malheureusement pas être présents.
          </div>
          <template v-else>
            <div v-if="!alone">
              Nous serons {{ adults }} adulte{{ adults > 1 ? 's' : ''
              }}{{ children ? ` et ${children} enfant${children > 1 ? 's' : ''}` : '' }}.<br />
            </div>
            <div v-if="!brunch && !dinner">
              {{ alone ? 'Je ne serai présent' : 'Nous ne serons présents' }} ni au dîner, ni au brunch.
            </div>
            <div>
              {{ alone ? 'Je serai présent' : 'Nous serons présents' }} au
              {{ dinner ? `dîner${!brunch ? '.' : ''}` : 'brunch.' }}{{ dinner && brunch ? ' et au brunch.' : '' }}
            </div>
            <div v-if="diet">Préférences alimentaires : {{ diet + (diet.endsWith('.') ? '' : '.') }}</div>
          </template>
          <FormButton label="Modifier" @click="underEdit = true" />
        </template>
        <div v-if="error">Il y a eu une erreur, merci de réessayer plus tard</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FormButton from '../components/FormButton.vue'
import { deleteField } from '../config/firebase'
export default Vue.extend({
  components: { FormButton },
  data() {
    return {
      attends: undefined,
      adults: 1,
      children: 0,
      dinner: true,
      brunch: true,
      diet: '',
      underEdit: true,
      error: false,
      pending: false,
      loading: true,
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
    alone() {
      // @ts-ignore
      return this.adults + this.children === 1
    },
  },
  async mounted() {
    try {
      const doc = await this.userRef.get()
      this.loading = false
      if (!doc.exists) return
      const { attends, adults, children, dinner, brunch, diet } = doc.data()
      if (typeof attends === 'undefined') return
      this.underEdit = false
      this.attends = attends
      if (!attends) return
      this.adults = adults
      this.children = children
      this.dinner = dinner
      this.brunch = brunch
      this.diet = diet
    } catch (e) {
      console.log(e)
      this.loading = false
      this.error = true
    }
  },
  methods: {
    async submit() {
      if (typeof this.attends === 'undefined') {
        return
      }
      this.error = false
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
        this.pending = true
        await this.userRef.update(data)
        this.underEdit = false
        this.pending = false
      } catch (e) {
        console.log(e)
        this.error = true
        this.pending = false
      }
    },
    removeIfNeeded(field: any) {
      return this.attends ? field : deleteField()
    },
  },
})
</script>
