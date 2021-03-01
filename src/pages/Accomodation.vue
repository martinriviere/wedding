<template>
  <div>
    <div class="background-fern bg-left w-full p-8 flex flex-col items-center">
      <SectionTitle>
        Hébergement
      </SectionTitle>
      <h3 class="text-white">
        Nous vous avons concocté une liste de logements aux alentours du domaine de notre mariage.
      </h3>
    </div>
    <div class="bg-white py-1 md:py-3">
      <Grid>
        <GridCard
          v-for="place in $page.accomodation.edges.map((e) => e.node)"
          :key="place.id"
          :id="place.id"
          :picture="place.picture"
        >
          <div class="flex flex-col">
            <div class="text-white mb-4" v-html="place.content" />
          </div>
        </GridCard>
      </Grid>
    </div>
  </div>
</template>

<page-query>
query {
  accomodation: allAccomodation(sortBy: "id", order: ASC) {
    edges {
      node {
        title
        picture(width: 700, height: 700)
        content
        id
      }
    }
  },
}
</page-query>
