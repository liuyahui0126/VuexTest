import Vue from 'vue'
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
      path:'/front',
      name:'helloWorld',
      component:HelloWorld
    },
    {
      path:'/end',
      component:End
    }
  ]
})