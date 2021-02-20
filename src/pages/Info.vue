<template>
  <div>
    <div class="bg-white">
      <div class="container mx-auto flex flex-col sm:flex-row">
        <div>
          <g-image src="../assets/img/infos/domaine.jpg" alt="Domaine" height="400" width="600" />
        </div>
        <div class="p-5 self-center">
          <SectionTitle class="mb-2 sm:mb-5">
            Programme
          </SectionTitle>
          <ul>
            <li v-for="step in program" :key="step" class="whitespace-no-wrap">
              {{ step }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col items-center py-5">
      <SectionTitle class="mb-2 sm:mb-5">
        Informations aux invités
      </SectionTitle>
      <h3 class="text-white mb-5">
        Conseils pour votre organisation
      </h3>
      <div class="flex flex-col sm:flex-row items-center sm:items-stretch sm:justify-around">
        <g-link v-for="info in infos" :key="info.title" :to="info.link" class="h-64 sm:h-auto sm:w-1/4">
          <InfoCard :info="info" class="w-full h-full" />
        </g-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InfoCard from '../components/infos/InfoCard.vue'

export default Vue.extend({
  components: {
    InfoCard,
  },
  data() {
    return {
      program: [
        '14h : Arrivée des invités',
        'Jeux en plein air',
        '16h30 : Séance photos',
        '17h : Cérémonie laïque',
        "19h : Vin d'honneur",
        '21h : Dîner sous les étoiles',
        '23h : Dancefloor',
      ],
      infos: [
        {
          title: 'Transports',
          description: "Comment s'y rendre ?",
          img: 'infos/transport.jpg',
          link: '/transports',
        },
        {
          title: 'Activités',
          description: 'Que faire dans le coin ?',
          img: 'infos/activities.jpg',
          link: 'activities',
        },
        {
          title: 'Hébergement',
          description: 'Où se loger ?',
          img: 'infos/accomodation.jpg',
          link: 'accomodation',
        },
      ],
    }
  },
})
</script>
