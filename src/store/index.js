import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  token:"",
	  nickname:''
  },
  mutations: {
	  setToken(state,arg){
		  state.token=arg.token
		  state.nickname=arg.name
	  }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
