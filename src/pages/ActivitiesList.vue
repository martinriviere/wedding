<template>
  <div class="w-full">
    <div class="container mx-auto flex flex-col items-center">
      <ActivityListTile
        v-for="activity in $page.activities.edges"
        :key="'activity' + activity.node.id"
        :activity="activity.node"
        :id="activity.node.id"
        class="mb-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import ActivityListTile from "../components/activities/ActivityListTile.vue"

export default Vue.extend({
  components: {
    ActivityListTile,
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
