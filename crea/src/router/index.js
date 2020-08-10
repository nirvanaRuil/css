import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demo1 from "../views/demo1.vue";
import demo2 from "../views/demo2.vue";
import demo3 from "../views/demo3.vue";
const demo4 = () =>
    import("../views/demo4.vue")
const demo5 = () =>
    import("../views/demo5.vue")

//异步加载,只有当访问到这个页面时才会请求这个文件,用这种方法比较好

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },{
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },{
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router .beforeEach((to,from,next) => {
  next()
})  //beforeEach和afterEach是全局路由钩子函数
router.afterEach((to,from) =>{

})//路由跳转后的钩子函数
//to 目标路由  from前一个执行路由
// next 必须执行next方法才能跳转路由:  执行next(),跳转到to对应的路由;
// 执行next(false),不跳转停留在当前页面;执行next(xxx),跳转到xxx页面

export default router
