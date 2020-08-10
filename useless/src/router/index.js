import Vue from 'vue'
import VueRouter from 'vue-router'
import less from 'less'
import Home from '../views/Home.vue'
import useless from "../views/useless.vue";
// import qwe from "../components/qwe.vue"
import HelloWorld from '@/components/HelloWorld.vue'
import qwe from '@/components/qwe.vue'

Vue.use(VueRouter)
Vue.use(less)

  const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default:HelloWorld,
      qwe:qwe,
    }
  },
    {
    path: '/useless',
    name: 'useless',
    component: useless
  },
  //   {
  //   path: '/qwe',
  //   name: 'qwe',
  //   component: qwe
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //  /* webpackChunkName: "about" */ 神奇的注释 可以按需打包,将几个包分成小包打在一起  起一个叫about的包名,把about放在里面
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
