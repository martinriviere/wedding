<template>
  <List backButtonLink="/team">
    <ListTile
      v-for="guy in $page.team.edges.map((e) => e.node)"
      :key="guy.id"
      :picture="guy.picture"
      :id="guy.id"
      class="mb-4"
    >
      <h2 class="text-lg text-gold">{{ guy.name }}</h2>
      <div v-html="guy.content" class="text-gray-400" />
      <p>
        <a :href="`tel:${guy.telephone}`" class="text-gray-400">{{ guy.telephone }}</a>
      </p>
      <p>
        <a :href="`mailto:${guy.mail}`" target="_blank" class="text-gray-400">Email</a>
      </p>
    </ListTile>
  </List>
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
}
</page-query>
