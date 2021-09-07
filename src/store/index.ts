import { createStore } from 'vuex'

const API_URL = 'https://api.chucknorris.io/jokes'
const API_CATEGORY = 'random'
const INITIAL_FACTS = 10

export default createStore({
  state: {
    facts: [],
    likes: [] // TODO: Add support for likes
  },
  mutations: {
    SET_FACTS (state, facts) {
      state.facts = facts
    }
  },
  actions: {
    async getFacts ({ commit }) {
      //  https://api.chucknorris.io/ does not let us batch fetch facts so we need loop initial 10 facts
      const requests = Array.apply(null, Array(INITIAL_FACTS)).map(() => fetch(`${API_URL}/${API_CATEGORY}`))

      Promise.all(requests).then(function (responses) {
        return Promise.all(responses.map((response) => response.json()))
      }).then(function (data) {
        commit('SET_FACTS', data)
      }).catch(function (error) {
        console.log(error) // Something went wrong
      })
    }
  },
  modules: {
  }
})
