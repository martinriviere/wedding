<template>
  <div>
    <div class="bg-fern bg-left w-full p-8 flex flex-col items-center">
      <SectionTitle>
        Activités
      </SectionTitle>
      <h3 class="text-white">
        Que faire sur place et aux alentours ?
      </h3>
    </div>
    <div class="bg-white py-1 md:py-3">
      <div class="container mx-auto grid grid-cols-3 gap-1 md:gap-3">
        <ActivityCard
          v-for="activity in $page.activities.edges"
          :key="'activity' + activity.node.id"
          :activity="activity.node"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import ActivityCard from "../components/activities/ActivityCard.vue"
import firebase from 'firebase/app'

export default Vue.extend({
  components: {
    ActivityCard,
  },
  mounted() {
    console.log(firebase.auth().currentUser)
  }
})
</script>

<page-query>
query {
  activities: allActivity(sortBy: "id", order: ASC) {
    edges {
      node {
        title
        picture(width: 700, height: 700)
        content
        id
      }
    }
  }
}
</page-query>
