import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    keyboardKeyGlobal: 0,
  },
  mutations: {
    setKeyboardKeyGlobal(state, count) {
      state.keyboardKeyGlobal = count
      console.log('set keyboardKeyGlobal', state.keyboardKeyGlobal)
    }
  },
  actions: {
  },
  modules: {
  }
})
