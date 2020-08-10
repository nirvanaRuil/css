import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import category from "../views/category.vue";
import zhuanti from "../views/zhuanti.vue";
import shopping from "../views/shopping.vue";
import me from "../views/me.vue";
import categorylist from "../views/categorylist.vue";
import products from "../views/products.vue";

Vue.use(VueRouter)


  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/category',
    name: 'category',
    component: category,
    children:[

    ],
  },
    {
      path:'/categorylist' ,
      name: 'categorylist',
      component:categorylist,
    },
    {
      path:'/products' ,
      name: 'products',
      component:products,
    },
    {
    path: '/zhuanti',
    name: 'zhuanti',
    component: zhuanti
  },
    {
    path: '/shopping',
    name: 'shopping',
    component: shopping
  },
    {
    path: '/me',
    name: 'me',
    component: me
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
  routes
})

export default router
