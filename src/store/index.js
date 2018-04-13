import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  articleList : []
}
let mutations = {
  addArticle(state,art){
    let obj = {
      ...art,
      time : Date()
    }
    if(state.articleList.filter(item => item.title == obj.title).length == 0){
      state.articleList.push(obj)
    }
    state.articleList.sort((a,b) => a.weight - b.weight)
  }
}

export default new Vuex.Store({
  state,
  mutations,
})