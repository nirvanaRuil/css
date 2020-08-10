import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import clock from "../views/clock.vue"
import slideshow from "../views/slideshow.vue";
import socket from "../views/socket";

Vue.use(VueRouter)

// //使用koa创建一个基本的 http server
// const http = require('http')
// const Koa = require('koa')
// const app = new Koa()
// const server = http.createServer(app.callback())
// const io = require('socket.io')(server)
// server.listen(8880)
//
// //实时通讯的连接
// //io.on('connection',事件的回调函数) 监听socketio的连接事件
// io.on('connection',(socket) => {
//   //socket.emit('发送事件的名称','发送的内容')--发送客户端数据
//   socket.emit('news', {hello: 'world'});
//   //socket.on()--监听客户端发送过来的内容
//   socket.on('my other event', (data) => {
//     console.log(data)
//   })
// })

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/clock',
    name: 'clock',
    component:clock
  },{
    path: '/slideshow',
    name: 'slideshow',
    component:slideshow
  },{
    path: '/socket',
    name: 'socket',
    component:socket
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
