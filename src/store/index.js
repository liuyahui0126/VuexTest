import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
    articleList: []
}
let mutations = {
    addArticle(state, art) {
        let obj = {
            ...art,
            time: new Date()
        }
        if (state.articleList.filter(item => item.title == obj.title).length == 0) {
            state.articleList.push(obj)
        }

        state.articleList.sort((a,b) => b.weight - a.weight)
    },
    changeArticle(state, {time, content, title, weight}) {
       let art = state.articleList.filter(item => item.time == time)[0]
       art.content = content
       art.title = title
       art.weight = weight
       state.articleList.sort((a,b) => b.weight - a.weight)
    },
    delArticle(state, time) {
        console.log(time)
      state.articleList = state.articleList.filter(item => item.time != time)
    }
}

export default new Vuex.Store({
   state,
   mutations 
})

