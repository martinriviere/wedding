<template>
  <!-- <Layout> -->
  <div>
    <div class="bg-white">
      <div class="container mx-auto flex flex-col sm:flex-row items-center">
        <div class="sm:w-1/2">
          <g-image src="../assets/img/main/calendar.jpg" alt="Calendrier" />
        </div>
        <div class="flex flex-col items-center text-center p-5 sm:w-1/2">
          <h2 class="text-2xl text-gold font-semibold uppercase font-arapey">
            Save the date
          </h2>
          <p class="my-4 text-2xl sm:text-4xl font-haviland">10 Juillet 2021</p>
          <p>
            Nous avons créé ce site dédié à notre mariage pour que vous ayez
            accès à toutes les informations pratiques<br />
            Laissez-vous porter par la visite pour trouver ce qu'il vous faut
            pour profiter pleinement de ce fabuleux évènement avec nous !
          </p>
        </div>
      </div>
    </div>
    <div class="flower bg-50% sm:bg-30% bg-no-repeat">
      <div class="container mx-auto flex flex-col sm:flex-row items-center">
        <div class="flex flex-col items-center text-center p-5 sm:w-1/2">
          <h2
            class="text-2xl text-gold font-semibold uppercase font-arapey mb-5"
          >
            Une vraie histoire d'amour
          </h2>
          <div class="text-white">
            <p>
              La cloche a sonné la fin des cours de la journée. Nous avions
              quatorze ans, et nous nous dépêchions d’aller en salle d’études…
              mais nous n’y sommes en fait jamais allés. Nous sommes restés tous
              les deux et nous avons eu notre premier "rencard" devant le
              collège de notre enfance, et la suite vous la connaissez. Tout le
              monde dit que l’on sait quand on rencontre la bonne personne, et
              c’est exactement ce qui nous est arrivé.
            </p>
            <p>
              Et maintenant : 4 animaux de compagnies, 1 PACS, 1 appartement,
              d’innombrables voyages et surtout un enfant. Nous sommes ravis de
              passer le cap et de nous unir par les liens du mariage. Pour
              passer cette grande étape, nous avons hâte de vous avoir à nos
              côtés.
            </p>
          </div>
        </div>
        <div class="sm:w-1/2">
          <g-image
            src="../assets/img/main/us.jpg"
            alt="Us"
            class="sm:w-4/5 sm:m-10"
          />
        </div>
      </div>
    </div>
    <div class="bg-grey-dark text-white py-5">
      <div class="container mx-auto flex flex-col items-center">
        <h2 class="text-2xl font-semibold uppercase font-arapey mb-5">
          Contactez nous
        </h2>
        <div class="flex flex-col sm:flex-row sm:justify-around">
          <Phone name="Manon Mazancieux" phone="06 49 66 55 86" />
          <Phone name="Martin Rivière" phone="06 81 44 76 44" />
        </div>
      </div>
    </div>
    <Map />
  </div>
  <!-- </Layout> -->
</template>

<script lang="ts">
import Vue from "vue"
import Map from "../components/Map.vue"
export default Vue.extend({
  components: {
    Map,
  },
})
</script>

<style lang="scss" scoped>
.flower {
  background-image: url("../assets/img/flower.png");
  background-position: left -20px top -20px;
}
</style>
