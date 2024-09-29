// store.js
import { reactive } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: '💼',
  },
  mutations: {
    UPDATE_MODE(state, payload) {
      state.mode = payload
    }
  },
  actions: {
    switchToWorkMode(context){
      context.commit('UPDATE_MODE', '💼')
    },
    switchToFriendsMode(context){
      context.commit('UPDATE_MODE', '🤝')
    }
  },
  getters: {
    isWorkMode: function (state) { 
      return state.mode == '💼'
    },
    isNotWorkMode: function(state) {
      return state.mode != '💼'
    }
  }
})
