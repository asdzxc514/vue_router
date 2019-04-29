import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import subpage from '@/views/class/subpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/subpage',
      name: 'subpage',
      component: subpage
    }
  ]
})
