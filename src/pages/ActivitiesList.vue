<template>
  <List backButtonLink="/activities">
    <ListTile
      v-for="activity in $page.activities.edges.map((e) => e.node)"
      :key="activity.id"
      :picture="activity.picture"
      :id="activity.id"
      class="mb-4"
    >
      <h2 class="text-lg text-gold">{{ activity.title }}</h2>
      <div v-html="activity.content" class="text-gray-400" />
    </ListTile>
  </List>
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
