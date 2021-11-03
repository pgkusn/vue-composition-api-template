import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'Kenge'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export const useStore = () => store;