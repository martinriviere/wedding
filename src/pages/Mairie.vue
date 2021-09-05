<template>
  <div>
    <div class="bg-white">
      <div class="container mx-auto flex flex-col sm:flex-row items-center">
        <div class="sm:w-1/2">
          <g-image src="../assets/img/mairie/book.jpg" alt="Livre" />
        </div>
        <div class="flex flex-col items-center text-center p-5 sm:w-1/2">
          <SectionTitle>
            Save the date
          </SectionTitle>
          <p class="my-4 text-2xl sm:text-4xl font-haviland">14 Mai 2021</p>
          <p>
            Si vous avez accès à cette page, c’est que vous êtes conviés à la célébration de notre union à la mairie de
            Charly.
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-0 background-flower flower bg-50% sm:bg-30% bg-no-repeat opacity-50" />
      <div class="container mx-auto flex flex-col sm:flex-row items-center">
        <div class="flex flex-col items-center text-center p-5 sm:w-1/2 relative">
          <SectionTitle class="mb-2 sm:mb-5">
            Programme de la journée
          </SectionTitle>
          <div class="text-white">
            <p>
              RDV à 14h15 à la mairie de Charly.
            </p>
            <p>
              Suivi d’un cocktail à 15h30. Puis, une petite boom à la maison.
            </p>
            <p>
              Et, ça se passe ici : Mairie de Charly / Place de la Mairie, 69390 CHARLY
            </p>
          </div>
        </div>
        <div class="sm:w-1/2">
          <g-image
            src="../assets/img/mairie/us.jpg"
            alt="Us"
            height="500"
            width="500"
            position="bottom"
            class="sm:w-4/5 sm:m-10"
          />
        </div>
      </div>
    </div>
    <div class="background-fern bg-left p-8">
      <SectionTitle class="text-center">
        Logements autour de chez nous
      </SectionTitle>
    </div>
    <Map :center="center" :importantPlaces="importantPlaces" :markers="markers" :zoom="12" />
  </div>
</template>

<script>
import Map from '../components/Map.vue'
import { generateMarker } from '../utils/latLng'

export default {
  components: {
    Map,
  },
  data() {
    return {
      center: { lat: 45.64918085670454, lng: 4.794803596255619 },
      markers: [
        generateMarker(
          'Camping des Barolles, Saint-Genis-Laval',
          45.68758753133687,
          4.785222033596258,
          'https://www.barolles.fr/',
        ),
        generateMarker(
          'Gîte "Sous Le Marronnier, Charly"',
          45.64889531036554,
          4.782075520653744,
          'https://gite-sous-le-marronnier.business.site/',
        ),
        generateMarker(
          'Hôtel Kyriad, Saint-Genis-Laval',
          45.675847922419386,
          4.784704833677451,
          'https://lyon-sud-saint-genis-laval.kyriad.com/fr-fr/',
        ),
        generateMarker(
          'Divers Airbnb dans le coin',
          45.65137145717374,
          4.787947969718062,
          'https://www.airbnb.fr/wishlists/895354652',
        ),
      ],
      importantPlaces: [
        generateMarker('Chez nous, 399A rue de la Brosse, Charly', 45.65409953864006, 4.787509695158173),
        generateMarker('Mairie, Charly', 45.64918085670454, 4.794803596255619),
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.flower {
  background-position: left -20px top -20px;
}
</style>
