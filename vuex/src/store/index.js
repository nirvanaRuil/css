import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建整个项目的数据仓库对象,将多组件共用的数据放置到此
export default new Vuex.Store({
  //相当于data
  state: {
    num:0,
    msg:'猪猪',
    age:'27',
    con:'1'
  },
  getters:{
    raver(){
      return this.state.msg.split('').reverse().join('')
    },
    xin(state){
      return function(val){   //如需传参,需要多写一层return
        return val + "123546" + this.state.age
      }
    }
  },
  //相当于methods,在这处理/修改状态,同步方法
  mutations: {
    add(state){  //默认参数state
      state.num+=2
    },
    set(state,value){  //这个额外的参数叫载荷(payload)
      state.con = value
    }
  },
  //相当于异步方法
  actions: {
  },
  //模块
  modules: {
  }
})
