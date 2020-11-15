<template>
  <div>{{ countdown }}</div>
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
