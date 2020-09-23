import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  mutations: {
    loadCharacters(state, payload) { state.characters = payload }
  },
  actions: {
    loadCharact(context) {
      axios.get('https://www.breakingbadapi.com/api/characters?').then((response) => {
        context.commit('loadCharacters', response.data)
      })
    }
  },
  getters: {
    chara: state => state.characters
  }
})
