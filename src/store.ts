import { StoreOptions } from 'vuex'
import { db } from './config/firebase'

interface User {
  email: string
  displayName: string
  id: string
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
    userRef: (state) => state.user && db.collection('users').doc(state.user.id)
  },
}

export default options
