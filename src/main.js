import "fontsource-libre-baskerville"
import "fontsource-mr-de-haviland"
import "fontsource-arapey"
import "fontsource-roboto"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faTimes, faPhone } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "leaflet/dist/leaflet.css"

import DefaultLayout from "./layouts/Default.vue"
import Phone from "./components/Phone.vue"

library.add(faBars, faTimes, faPhone)

config.autoAddCss = false

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
  Vue.component("FontAwesome", FontAwesomeIcon)
  Vue.component("Phone", Phone)
}
