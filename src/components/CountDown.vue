<template>
  <h2>{{ countdown }}</h2>
</template>

<script lang="ts">
import Vue from "vue"
import * as moment from "moment"

moment.locale("fr")

export default Vue.extend({
  data: () => ({
    date: moment(),
    interval: setInterval(() => {}, 0),
  }),
  computed: {
    countdown() {
      const duration = moment.duration(
        moment("07092020 14:00", "DDMMYYYY hh:mm").diff(this.date)
      )
      const months = duration.months() > 0 ? duration.months() + " mois, " : ""
      const days = duration.days() > 0 ? duration.days() + " jours, " : ""
      const minutes =
        !months && !days && duration.minutes() > 0
          ? duration.minutes() + " minutes"
          : ""
      const hours =
        duration.hours() > 0
          ? duration.hours() + ` heures${minutes ? ", " : ""}`
          : ""
      // const seconds = duration.seconds() + " secondes"
      // return 'coucou'
      return months + days + hours + minutes
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = moment()
    }, 60000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
})
</script>

<style lang="scss" scoped>
h2 {
  color: white;
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
