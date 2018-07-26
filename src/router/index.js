import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NotFoundComponent from '@/components/404'
import Base from '@/components/Base'
import PostDetail from '@/components/PostDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Base,
      children: [
        {path: '/', name: 'index', component: Posts},
        {path: '/category/:category/', name: 'category', component: Posts},
        {path: '/tag/:tag/', name: 'tag', component: Posts},
        {path: '/:year/:month/:day/:slug/', name: 'detail', component: PostDetail},
        {path: '/:year/:month/', name: 'archive', component: Posts},
      ]
    },
    { path: '*', component: NotFoundComponent }
  ]
})
