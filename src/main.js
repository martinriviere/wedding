import "fontsource-libre-baskerville"
import "fontsource-mr-de-haviland"
import "fontsource-arapey"
import "fontsource-roboto"

import Vuex from 'vuex'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faTimes, faPhone } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "leaflet/dist/leaflet.css"
import { auth } from "./config/firebase"
import store from "./store";

import DefaultLayout from "./layouts/Default.vue"
import Phone from "./components/Phone.vue"
import SectionTitle from "./components/SectionTitle.vue"

library.add(faBars, faTimes, faPhone)

config.autoAddCss = false

export default function(Vue, { router, appOptions, head, isClient }) {
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store(store)
  appOptions.router = router
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
  Vue.component("FontAwesome", FontAwesomeIcon)
  Vue.component("Phone", Phone)
  Vue.component("SectionTitle", SectionTitle)

  // router.beforeEach((to, from, next) => {
  //   if (to.path !== "/" && !auth.currentUser) {
  //     next("/")
  //   } else {
  //     next()
  //   }
  // })
}
