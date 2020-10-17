import "typeface-libre-baskerville"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

import DefaultLayout from "~/layouts/Default.vue"
library.add(faBars)

config.autoAddCss = false

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
  Vue.component("FontAwesome", FontAwesomeIcon)
}
