<template>
  <h2>{{ countdown }}</h2>
</template>

<script lang="ts">
import Vue from "vue"
import * as countdown from "countdown"

countdown.setLabels(
  " milliseconde| seconde| minute| heure| jour| semaine| mois| année| décennie| siècle| millénaire",
  " millisecondes| secondes| minutes| heures| jours| semaines| mois| années| décennies| siècles| millénaires",
  ", ",
  ", ",
  "maintenant"
)

export default Vue.extend({
  data: () => ({
    date: Date.now(),
    interval: setInterval(() => {}, 0),
  }),
  computed: {
    countdown() {
      const duration = countdown(
        this.date,
        new Date(2021, 6, 10, 14),
        undefined,
        3
      )
      return duration.toString()
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = Date.now()
    }, 60000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
})
</script>

<style lang="scss" scoped>
h2 {
  color: #ddd;
  font-size: 35px;
  text-align: center;
  font-weight: 500;
}
@media screen and (max-width: 767px) {
  h2 {
    font-size: 20px;
  }
}
</style>
