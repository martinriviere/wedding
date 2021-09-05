import { db } from './config/firebase'

const state = {
  loading: true,
  user: undefined
}

const options = {
  state,
  mutations: {
    setUser: (state, value) => {
      state.user = value
      setTimeout(() => (state.loading = false), 200)
    },
  },
  getters: {
    userRef: (state) => state.user && db?.collection('users').doc(state.user.id),
  },
}

export default options
