import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

//在实例app对象中进行配置store对象
new Vue({
  router, //解构
  store,
  render: h => h(App)
}).$mount('#app')
