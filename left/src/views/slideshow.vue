<template>
    <div id="container">  <!-- 总体框架 -->
        <button class="btn b1" @click="cool"></button>
        <button class="btn b2" @click="cool"></button>
        <button class="btn b3" @click="cool"></button>
        <button class="btn b4" @click="cool"></button>

        <div id="box">    <!-- 六个面的父元素框架 -->
            <!-- 每个面有相同有不同,设置两个class值 -->
            <div class = "boxPage top "></div>
            <div class = "boxPage bottom "></div>
            <div class = "boxPage left "></div>
            <div class = "boxPage right "></div>
<!--            <div class = "boxPage front "></div>-->
<!--            <div class = "boxPage behind "></div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "slideshow",
        data(){
            return{

            }
        },
        methods:{
            // cool(){
            //     this.
            // }
        },

    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #container{
        width: 300px;
        height: 300px;
        margin: 150px auto;
        perspective: 2000px;
        position: relative;
        overflow: hidden;
    }
    #box{

        width: 300px;
        height: 300px;
        transform-style: preserve-3d;
        /*在父容器定义3d*/
        box-sizing: border-box;
        animation: rotate 10s linear infinite;
    }
    /*transparent用来指定全透明色彩*/
    @keyframes rotate{
        0%,22%{transform: rotateY(0deg)}
        25%,47%{transform: rotateY(90deg)}
        50%,72%{transform: rotateY(180deg)}
        75%,97%{transform: rotateY(270deg)}
        100%{transform: rotateY(360deg)}
    }

    .btn{
        border: white 2px solid;
        height: 18px;
        width: 18px;
        box-sizing: border-box;
        border-radius: 50%;
        box-shadow: goldenrod 1px 1px 2px ;
        background-color: goldenrod;
        position: absolute;
        margin-left: 10px;
        bottom: 0;
        z-index: 50;
    }
    .btn:hover{
        background-color: cornflowerblue;
        transform: scale(1.2);
    }

    .b1{
        right: 60px;
    }
    .b1:hover ~#box{
        /*transform:  rotateY(0deg)!important;*/
        animation: none  !important;
    }
    .b2{
        right: 40px;
    }
    .b2:hover ~#box{
        transform:  rotateY(90deg) !important;
    }
    .b2:active {
        animation-play-state:paused;
    }
    .b3{
        right: 20px;
    }
    .b3:hover ~#box{
        transform:  rotateY(180deg)!important;
        /*animation-play-state:paused;*/
    }
    /*.b3:active ~#box{*/
    /*    !*transform:  rotateY(180deg);*!*/
    /*    animation-play-state:paused;*/
    /*}*/
    .b4{
        right: 0;
    }
    .b4:hover ~#box{
        transform:  rotateY(270deg)!important;
    }
    .boxPage{
        height: 300px;
        width: 300px;
        position: absolute;
        /*    给六个面位置初始化*/
        /*transform-style: preserve-3d;*/
        /* 是每个面九个小块的父元素,给它定义3d*/
    }

    /*以下是定位六个面的位置*/
    .top{
        transform: translateZ(150px);
        background-color: darkred;
    }
    .bottom{
        transform: translateZ(-150px) rotateX(180deg);
        background-color: green;
    }
    .left{
        transform: translateX(-150px) rotateY(-90deg);
        background-color: skyblue;
    }
    .right{
        transform: translateX(150px) rotateY(90deg);
        background-color: blueviolet;
    }
    /*.front{*/
    /*    transform: translateY(150px) rotateX(-90deg);*/
    /*    background-color: mediumvioletred;*/
    /*}*/
    /*.behind{*/
    /*    transform: translateY(-150px) rotateX(90deg);*/
    /*    background-color: darkkhaki;*/
    /*}*/
</style>