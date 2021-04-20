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
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="text" class="border rounded border-gray-500 p-2" v-model="nameFilter"
                       placeholder="Chercher par nom"/>
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <select v-model="attendsFilter" class="border rounded border-gray-500 p-2">
                  <option value="all">Tous</option>
                  <option :value="true">Participe</option>
                  <option :value="false">Ne participe pas</option>
                  <option :value="undefined">N'a pas répondu</option>
                </select>
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {{ adults || '' }}
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {{ children || '' }}
              </th>
              <th/>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="person in filteredPeople" :key="person.displayName">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ person.displayName }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm"
                  :class="person.attends ? 'text-green-500' : 'text-red-500'">
                <FontAwesome v-if="person.attends !== undefined" :icon="['fas', person.attends ?  'check' : 'times']"/>
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
import { map, pipe, pluck, sum } from 'ramda'


export default Vue.extend({
  data() {
    return {
      people: [],
      nameFilter: '',
      attendsFilter: 'all'
    }
  },
  methods: {
    sumBy(prop) {
      return pipe(pluck(prop), map(x => !x ? 0 : x), sum)(this.filteredPeople)
    }
  },
  computed: {
    filteredPeople() {
      return this.people.filter(person =>
          person.displayName.toLowerCase().includes(this.nameFilter.toLowerCase()) &&
          (this.attendsFilter === 'all' || person.attends === this.attendsFilter))
    },
    adults() {
      return this.sumBy('adults')
    },
    children() {
      return this.sumBy('children')
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


