import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    knobValGlobal: 0,
  },
  mutations: {
    setKnobValGlobal(state, count) {
      state.knobValGlobal = count
      console.log('set knobValGlobal', state.knobValGlobal)
    }
  },
  actions: {
  },
  modules: {
  }
})
