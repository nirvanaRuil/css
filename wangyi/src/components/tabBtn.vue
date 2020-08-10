<template>
    <div>
        <van-tabbar v-model="tabActive">
            <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="hot" to="zhuanti">专题</van-tabbar-item>
            <van-tabbar-item icon="bag" to="/category">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart" to="shopping">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager" to="me">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>


<script>
    export default {
        name: "tabBtn",
        data(){
            return{
                tabActive:0,
            }
        },
        mounted() {
            // console.log(this)
            switch (this.$route.path) {
                case '/':
                    this.tabActive = 0;
                    break;
                case '/zhuanti':
                    this.tabActive = 1;
                    break;
                case '/category':
                    this.tabActive = 2;
                    break;
                case '/shopping':
                    this.tabActive = 3;
                    break;
                case '/me':
                    this.tabActive = 4;
                    break;
                default:
                    this.tabActive = 2;
            }
        },
//         watch:{
//             $route(){
// //switch本来在这
//             },
//         },
        // beforeEnter:() =>{
        //     console.log(to)
        // }
    }
</script>

<style scoped>

</style>