import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NotFoundComponent from '@/components/404'
import Base from '@/components/Base'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Base,
      children: [
        {path: '/', name: 'index', component: Posts}
      ]
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    { path: '*', component: NotFoundComponent }
  ]
})
