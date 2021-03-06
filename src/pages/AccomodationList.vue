<template>
  <List backButtonLink="/accomodation">
    <ListTile
      v-for="place in $page.accomodation.edges.map((e) => e.node)"
      :key="place.id"
      :picture="place.picture"
      :id="place.id"
      class="mb-4"
    >
      <h2 class="text-lg text-gold">{{ place.title }}</h2>
      <div v-html="place.content" class="text-gray-400" />
    </ListTile>
  </List>
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
