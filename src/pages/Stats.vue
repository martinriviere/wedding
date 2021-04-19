<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Présents
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Adultes
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Enfants
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Régime
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="person in people" :key="person.displayName">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ person.displayName }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm" :class="person.attends ? 'text-green-500' : 'text-red-500'">
                <FontAwesome v-if="person.attends !== undefined" :icon="['fas', person.attends ?  'check' : 'times']" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ person.adults }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ person.children || '' }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ person.diet }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { auth, db } from '../config/firebase'

export default Vue.extend({
  data() {
    return {
      people: []
    }
  },
  mounted() {
    if (!auth || !db) return
    this.unsubscribe = db.collection('users').onSnapshot(querySnapshot => {
      const people = []
      querySnapshot.forEach(doc => {
        people.push(doc.data())
      })
      this.people = people
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  }
})
</script>


