<template>
    <div>
        <h1>计算属性 和 侦听属性</h1>
        <div>{{type_msg}}</div>
        <div>{{firstname}} --- {{lastname}} = {{fullname}}</div>
        <button @click="modifyFirst">修改firstname</button>
    </div>
</template>

<script>
    export default {
        name: "demo3",
        data(){
            return{
                msg:'ddddd',
                type:'moon',
                firstname:'zhang',
                lastname:'sq',
                fullname:''
            }
        },
        methods:{
            fullname(){
                this.fullname =  this.firstname + '-' + this.lastname
            },
            modifyFirst(){
                this.firstname = 'lin'
            }
        },
        computed:{
//computed属性的结果会被保存,反复调用,除非依赖的响应式属性变化才会重新计算,主要当属性使用
            type_msg(){
                return this.type + '-' + this.msg
            },
            // fullname(){
            //     return this.firstname + '-' + this.lastname
            // }
        },
        watch:{
//使用这个属性,可以监视data中指定数据的变化,然后触发watch中对应的function处理函数.
            firstname:function (newVal,oldVal) {
                this.fullname = newVal + '-' + this.lastname
            },
            lastname:function (newVal) {
                this.fullname = this.firstname + '-' + newVal
            },
        }
    }
</script>

<style scoped>

</style>