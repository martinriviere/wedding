<template>
  <Layout>
    <div v-html="$page.content.content" class="my-20 text-white" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({})
</script>

<page-query>
  query {
    content(path: "/content/main/") {
      title,
      content
  }
  }
</page-query>
