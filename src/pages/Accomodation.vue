<template>
  <div>
    <div class="bg-white w-full mb-1 md:mb-3">
      <div class="container mx-auto">
        <div class="w-screen p-5 self-center">
          <SectionTitle class="mb-2 sm:mb-5">
            Hébergement
          </SectionTitle>
          <p class="mb-2">
            Nous vous avons concocter une liste de logements aux alentours du domaine de notre mariage.
          </p>
          <p class="mb-2">
            Vous trouverez ci-dessous une carte les répertoriant.
          </p>
          <p>
            Certains domaines sont bloqués un certain temps pour vous sous le nom Rivière.
          </p>
        </div>
      </div>
    </div>
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
