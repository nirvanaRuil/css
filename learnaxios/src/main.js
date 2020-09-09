import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// import axios from 'axios'
// axios({
//   url:"Http://localhost:9999/student/student/findStudent"
// }).then(res => {
//   console.log(res);
// })

import {request} from "./request/request.js";
request( 'Http://localhost:9999/student/student/findStudent'),res => {
  console.log(res);
},err => {
  console.log(err);
}//第一种方式,传递请求参数,把回调函数返回带到相应的位置


import {request} from "./request/request.js";
request({
    url:'findStudent',
    success:res => {
      console.log(res);
    },
    fail:err => {
      console.log(err);
    }
})  //将回调函数封装到一个回调函数中


import {request} from "./request/request.js";
request({
  url:'findStudent',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})  //第三种方式


import {request} from "./request/request.js";
request({
  url:'findStudent',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})  //第四种方式




