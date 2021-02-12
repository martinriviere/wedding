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
      <Grid>
        <GridCard
          v-for="activity in $page.activities.edges"
          :key="activity.node.id"
          :id="activity.node.id"
          :picture="activity.node.picture"
        >
          <div class="text-white" v-html="activity.node.content" />
        </GridCard>
      </Grid>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '../components/Grid.vue'
import GridCard from '../components/GridCard.vue'

export default Vue.extend({
  components: {
    Grid,
    GridCard,
  },
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
