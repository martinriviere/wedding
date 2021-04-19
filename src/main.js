import '@fontsource/libre-baskerville'
import '@fontsource/mr-de-haviland'
import '@fontsource/arapey'
import "@fontsource/pt-sans"

import Vuex from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faPhone, faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'leaflet/dist/leaflet.css'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import store from './store'

import DefaultLayout from './layouts/Default.vue'
import Phone from './components/Phone.vue'
import SectionTitle from './components/SectionTitle.vue'
import FormButton from './components/FormButton.vue'
import Grid from './components/Grid.vue'
import GridCard from './components/GridCard.vue'
import List from './components/List.vue'
import ListTile from './components/ListTile.vue'

library.add(faBars, faTimes, faPhone, faChevronLeft, faCheck)

config.autoAddCss = false

export default function(Vue, { router, appOptions, head, isClient }) {
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store(store)
  appOptions.router = router
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('FontAwesome', FontAwesomeIcon)
  Vue.component('Phone', Phone)
  Vue.component('SectionTitle', SectionTitle)
  Vue.component('FormButton', FormButton)
  Vue.component('Loader', PulseLoader)
  Vue.component('Grid', Grid)
  Vue.component('GridCard', GridCard)
  Vue.component('List', List)
  Vue.component('ListTile', ListTile)

  // router.beforeEach((to, from, next) => {
  //   if (to.path !== "/" && !auth.currentUser) {
  //     next("/")
  //   } else {
  //     next()
  //   }
  // })
}
