import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import End from '@/components/End'

Vue.use(Router)

let state = {
  articleList : []
}

export default new Router({
  routes:[
    {
      path:'/',
      name:'helloWorld',
      component:HelloWorld
    },
    {
      path:'/end',
      name:'end',
      component:End
    }
  ]
})