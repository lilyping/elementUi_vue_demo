import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import workPlace from '@/components/menu/workPlace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      redirect: '/home/workPlace',
      children: [
        {
          path: 'workPlace',
          component: workPlace,
          name: '首页'
        },
        {
          path: 'clientList',
          component: resolve => require(['@/components/menu/clientList'], resolve),
          name: '子菜单1'
        },
        {
          path: 'readyList',
          component: resolve => require(['@/components/menu/readyList'], resolve),
          name: '子菜单2'
        },
        {
          path: 'dealRoute',
          component: resolve => require(['@/components/menu/dealRoute'], resolve),
          name: '动态'
        }
      ]
    }
  ]
})
