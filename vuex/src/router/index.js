import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import getter from '../views/getter.vue'
import action from '../views/action.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/getter',
    name: 'getter',
    component: getter
  },
    {
    path: '/action',
    name: 'action',
    component: action
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
