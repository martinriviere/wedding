<template>
  <div>
    <div class="bg-white">
      <div class="container mx-auto flex flex-col sm:flex-row items-center">
        <div class="sm:w-1/2">
          <g-image src="../assets/img/main/calendar.jpg" alt="Calendrier" />
        </div>
        <div class="flex flex-col items-center text-center p-5 sm:w-1/2">
          <SectionTitle>
            Save the date
          </SectionTitle>
          <p class="my-4 text-2xl sm:text-4xl font-haviland">10 Juillet 2021</p>
          <p>
            Nous avons créé ce site dédié à notre mariage pour que vous ayez accès à toutes les informations
            pratiques<br />
            Laissez-vous porter par la visite pour trouver ce qu'il vous faut pour profiter pleinement de ce fabuleux
            évènement avec nous !
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 bg-flower flower bg-50% sm:bg-30% bg-no-repeat opacity-50" />
      <div class="container mx-auto flex flex-col sm:flex-row items-center">
        <div class="flex flex-col items-center text-center p-5 sm:w-1/2 relative">
          <SectionTitle class="mb-2 sm:mb-5">
            Une vraie histoire d'amour
          </SectionTitle>
          <div class="text-white">
            <p>
              La cloche a sonné la fin des cours de la journée. Nous avions quatorze ans, et nous nous dépêchions
              d’aller en salle d’études… mais nous n’y sommes en fait jamais allés. Nous sommes restés tous les deux et
              nous avons eu notre premier "rencard" devant le collège de notre enfance, et la suite vous la connaissez.
              Tout le monde dit que l’on sait quand on rencontre la bonne personne, et c’est exactement ce qui nous est
              arrivé.
            </p>
            <p>
              Et maintenant : 4 animaux de compagnies, 1 PACS, 1 appartement, d’innombrables voyages et surtout un
              enfant. Nous sommes ravis de passer le cap et de nous unir par les liens du mariage. Pour passer cette
              grande étape, nous avons hâte de vous avoir à nos côtés.
            </p>
          </div>
        </div>
        <div class="sm:w-1/2">
          <g-image src="../assets/img/main/us.jpg" alt="Us" class="sm:w-4/5 sm:m-10" />
        </div>
      </div>
    </div>
    <div class="bg-grey-dark py-5">
      <div class="container mx-auto flex flex-col items-center">
        <SectionTitle class="mb-2 sm:mb-5">
          Contactez nous
        </SectionTitle>
        <div class="flex flex-col sm:flex-row sm:justify-around text-white">
          <Phone name="Manon Mazancieux" phone="06 49 66 55 86" />
          <Phone name="Martin Rivière" phone="06 81 44 76 44" />
        </div>
      </div>
    </div>
    <Map :center="center" :importantPlaces="markers" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Map from '../components/Map.vue'
import { generateMarker } from '../utils/latLng'

export default Vue.extend({
  components: {
    Map,
  },
  data() {
    return {
      center: { lat: 44.729471, lng: -0.421311 },
      // markers: [{ popup: 'Château Sentout, Tabanac', latLng: { lat: 44.729471, lng: -0.421311 } }],
      markers: [generateMarker('Château Sentout, Tabanac', 44.72947056817649, -0.42128920438841)],
    }
  },
})
</script>

<style lang="scss" scoped>
.flower {
  background-position: left -20px top -20px;
}
</style>
