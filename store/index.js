import Vuex from 'vuex'
import axios from 'axios'

export default () => new Vuex.Store({
  state: {
    items:[]
  },
  getters: {
    items: (state) => state.items
  },
  mutations: {
    setItems (state, { items }) {
      state.items = items
    }
  },
  actions: {
    async fetchItems({ commit },{ content }) {
      console.log(content);
      var url='https://tgjhgc7byj.execute-api.ap-northeast-1.amazonaws.com/dev/traverse'
      await axios.post(url,content )
      .then((response) => {
          commit('setItems', { items: response.data })
      })
    }
  }
})