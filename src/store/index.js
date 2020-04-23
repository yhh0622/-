import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

//1.首先创建一个store实例
const store = new Vuex.Store({
  state: {
    navListVal: 0,
    vWidth: document.body.offsetWidth 
  },
  mutations: {
    setListVal(state, data) {
      return state.navListVal = data
    }, setVwidth(state, data) {
      return state.vWidth = data
    }
  }
})
export default store
