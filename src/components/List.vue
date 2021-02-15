<template>
  <div class="w-full">
    <div class="container mx-auto flex flex-col items-center">
      <ListTile
        v-for="item in data"
        :key="item.id"
        :activity="item"
        :id="item.id"
        class="mb-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import ListTile from "../components/ListTile.vue"

export default Vue.extend({
  components: {
    ListTile,
  },
  props: {
    data: Array
  }
})
</script>
