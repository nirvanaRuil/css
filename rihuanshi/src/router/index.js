import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import rihuanshi from "../views/rihuanshi.vue";
// const count = () =>
//     import("../views/count.vue")
// const guessNumCss = () =>
//     import("../../../rihuanshi/src/views/guessNumCss.vue")
// const signal = () =>
//     import("../views/signal.vue")
// const clock = () =>
//     import("../../../rihuanshi/src/views/clock.vue")
import all from "../views/all.vue";

Vue.use(VueRouter)

    const routes = [
        {
          path: '/',
          name: 'all',
          component: all
        },
        {
          path: '/about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
          {
          path: '/Home',
          name: 'Home',
          component: () => import( '../views/Home.vue')
        },
          {
          path: '/rihuanshi',
          name: 'rihuanshi',
          component: () => import( '../views/rihuanshi.vue')
        },
          {
          path: '/count',
          name: 'count',
          component: () => import('../views/count.vue')
        },
          {
          path: '/signal',
          name: 'signal',
          component: () => import( '../views/signal.vue')
        },
          {
          path: '/guessNumCss',
          name: 'guessNumCss',
          component: () => import( '../views/guessNumCss.vue')
        },
          {
          path: '/clock',
          name: 'clock',
          component: () => import( '../../../left/src/views/clock.vue')
        }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
