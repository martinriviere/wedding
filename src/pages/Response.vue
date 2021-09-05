<template>
  <div class="bg-white flex flex-grow flex-wrap">
    <div class="flex flex-col w-screen sm:w-1/2 items-center justify-center relative">
      <div class="background-flower bg-cover absolute inset-0 opacity-25" />
      <SectionTitle>RSVP</SectionTitle>
      <h3 class="text-xl">Avant le 15 avril 2021</h3>
    </div>
    <div class="w-screen sm:w-1/2 flex justify-center">
      <div class="flex flex-col justify-center items-start px-20 sm:px-10">
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
        <div v-if="error" class="mt-4">Il y a eu une erreur, merci de réessayer plus tard</div>
      </div>
    </div>
  </div>
</template>

<script>
import FormButton from '../components/FormButton.vue'
import { deleteField } from '../config/firebase'

export default {
  components: { FormButton },
  data() {
    const { attends, adults, children, dinner, brunch, diet } = this.$store.state.user
    return {
      attends: attends || undefined,
      adults: adults || 1,
      children: children || 0,
      dinner: dinner || true,
      brunch: brunch || true,
      diet: diet || '',
      underEdit: typeof attends === 'undefined' || false,
      error: false,
      pending: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    userRef() {
      return this.$store.getters.userRef
    },
    disabled() {
      return typeof this.attends === 'undefined'
    },
    alone() {
      return this.adults + this.children === 1
    },
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
        this.error = true
        this.pending = false
      }
    },
    removeIfNeeded(field) {
      return this.attends ? field : deleteField()
    },
  },
}
</script>
