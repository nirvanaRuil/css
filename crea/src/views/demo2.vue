<template>
    <div>
        <h1>事件修饰符/按键修饰符</h1>
        <div @click.self="father">父级
<!--儿子不会冒泡到父级,因为父级绑定了self,只能触发自己-->
            <div @click.="son1">儿子1</div>
            <div @click.stop="son2">儿子2</div>
            <!--阻止冒泡-->
            <div @click.right.prevent="son3">儿子3</div>
            <!--阻止右键默认-->
            <input type="text" @keydown.ctrl="son4">
            <div @keydown.enter="son5">儿子5</div>
            <div @keydown.delete.prevent="son6">儿子6</div>
            <div @keydown.space="son6">儿子6</div>
            <!--阻止输入空格-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "demo2",
        data(){
            return{

            }
        },
        methods:{
            father(){
                console.log('父元素')
            },
            son1(){
                console.log('第一个儿子')
            },
            son2(){
                console.log('第二个儿子')
            },
            son3(){
                console.log('第3个儿子')
            },
            son4(){
                console.log('第4个儿子')
            },
            son5(){
                console.log('第5个儿子')
            },
            son6(){
                console.log('第6个儿子')
            }
        }
    }
</script>

<style scoped>

</style>