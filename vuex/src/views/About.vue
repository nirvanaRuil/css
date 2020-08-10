<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>点击数量:{{count}}</h1><br>
    <button @click="add">点击添加</button>
<!--    假设它是全局共享或多组件共享,剥离出来它,剥离到store-->

    <h1>点击数量:{{$store.state.num}}</h1><br>
    <button @click="emitAction">点击添加</button>
<!--    vuex的方式-->

    <div>
      <h2>名字:{{msg}}</h2>
      <h2>年龄:{{$store.state.age}}</h2>
      <h2>数量:{{$store.state.con}}</h2>
      <input type="text" v-model="con">
      <input type="text" :value="con" @input="changeOne">
<!--      监听一个输入事件-->
    </div>

  </div>
</template>


<script>
import { mapState } from 'vuex'
  //用来映射数据到computed里

  export default {
    name: 'Home',
    data(){
      return{
        count:'0'
      }
    },
    methods:{
      add(){
        this.count++
      },
      emitAction(){
        this.$store.commit('add')  //调用mutations中的add方法
      },
      changeOne(val){
        this.$store.commit('set',val.target.value)  //用第一种映射方式时,需要另外设置
      }
      //采用vuex可以在共享数据时不混乱;可以随时看到哪个action(就是mutations)在修改数据
    },


    // computed:{  //将想要用到的全局state数据,放置在组件的computed内部使用,v-model的内容将其获取和设置分开来即可(用get)
    //     msg(){
    //       return this.$store.state.msg
    //     },
    //     con:{
    //         get(){
    //           return this.$store.state.con  //获取
    //         },
    //         set(value) {
    //           this.$store.commit('set',value)  //设置
    //         }
    //     },
    // }
    computed:mapState(['msg','con']), //第一种映射方式(获取),想要哪个就写哪个,但是不能设置
    computed:mapState({   //第二种方式,用箭头函数
      msg:'msg',
      con:() => this.state.con,
    }),
    computed: {   //第三种方式,不想所有东西都被原有的东西覆盖,要有自己能写的
       mapState:{
          reverse(){
            return this.color.splice('').reverse().join('')
          },
          ...mapState({    //...表示解构
            msg:'msg',
            con:() => this.state.con,
          }),  //这段要是不能运行,就放到外面声明试试看
       },
    }
  }
</script>