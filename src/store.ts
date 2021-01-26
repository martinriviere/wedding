import { StoreOptions } from "vuex"

interface User {
  email: string
  displayName: string
}

interface State {
  loading: boolean
  user: User | null
}

const state: State = {
  loading: true,
  user: null,
}

const options: StoreOptions<State> = {
  state,
  mutations: {
    setUser: (state, value) => {
      state.user = value
      state.loading = false
    },
  },
  getters: {
    loggedIn: (state) => !!state.user,
  },
}

export default options
