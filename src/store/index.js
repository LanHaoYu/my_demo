import Vue from 'vue'
import Vuex from 'vuex'

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
  }
})
