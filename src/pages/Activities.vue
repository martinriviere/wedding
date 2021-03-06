<template>
  <div>
    <div class="background-fern bg-left w-full p-8 flex flex-col items-center">
      <SectionTitle>
        Activités
      </SectionTitle>
      <h3 class="text-white text-center">
        Que faire sur place et aux alentours ?
      </h3>
    </div>
    <div class="py-1 md:py-3">
      <Grid>
        <GridCard
          v-for="activity in $page.activities.edges.map((e) => e.node)"
          :key="activity.id"
          :id="activity.id"
          :picture="activity.picture"
        >
          <div class="text-white" v-html="activity.content" />
        </GridCard>
      </Grid>
    </div>
  </div>
</template>

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
