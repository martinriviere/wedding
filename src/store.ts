import { StoreOptions } from 'vuex'
import { db } from './config/firebase'

interface User {
  email: string
  id: string
  mairie: boolean
  vip: boolean
  attends: boolean
  adults: number
  children: number
  dinner: boolean
  brunch: boolean
  diet: string
}

interface State {
  loading: boolean
  user: User | null | undefined
}

const state: State = {
  loading: true,
  user: undefined
}

const options: StoreOptions<State> = {
  state,
  mutations: {
    setUser: (state, value) => {
      state.user = value
      setTimeout(() => (state.loading = false), 200)
    },
  },
  getters: {
    userRef: (state) => state.user && db.collection('users').doc(state.user.id),
  },
}

export default options
