<template>
  <div>
    <div class="bg-white w-full mb-1">
      <div class="container mx-auto">
        <div class="flex flex-col sm:flex-row mb-4">
          <g-image src="../assets/img/team/us.jpg" class="hidden sm:block w-screen sm:w-1/2" />
          <div class="w-screen sm:w-1/2 p-5 self-center">
            <SectionTitle class="mb-2 sm:mb-5">
              Présentation de la team mariés
            </SectionTitle>
            <p class="mb-2">
              Nous avons la chance d’avoir une team en or qui nous soutient et nous accompagne dans la préparation de ce
              bel évènement.
            </p>
            <p>
              Vous trouverez toute l’équipe ci-après avec leurs coordonnées.
            </p>
          </div>
        </div>
        <div class="p-5">
          <SectionTitle class="mb-2 sm:mb-5">
            {{ $page.description.name }}
          </SectionTitle>
          <div v-html="$page.description.content" />
        </div>
      </div>
    </div>
    <Grid>
      <GridCard v-for="guy in $page.team.edges.map((e) => e.node)" :key="guy.id" :id="guy.id" :picture="guy.picture">
        <div class="flex flex-col">
          <div class="text-white mb-4" v-html="guy.content" />
          <div class="text-white mb-4">{{ guy.telephone }}</div>
          <a :href="`mailto:${guy.mail}`" class="text-white" target="_blank">E-mail</a>
        </div>
      </GridCard>
    </Grid>
  </div>
</template>

<page-query>
query {
  team: allTeam(sortBy: "id", order: ASC, filter: { id: { ne: "12" }}) {
    edges {
      node {
        name
        telephone
        mail
        picture(width: 700, height: 700)
        content
        id
      }
    }
  },
  description: team(id: "12") {
    name
    content
  }
}
</page-query>
