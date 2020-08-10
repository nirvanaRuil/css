<template>
    <div id="app">
        <div class="nav">
            <ul class="item ul">
                <a class="a" href="#" @mouseover="see">𝓒𝓼𝓼 </a>
                <ul class="plat ul" v-show="pl">
                    <li class="delay1" @click="boom" >
                        <router-link class="a" to="/">Home</router-link>
                    </li>
                    <li class="delay2" @click="boom" >
                        <router-link class="a"  to="/riquanshi">日全食</router-link>
                    </li>
                    <li class="delay3" @click="boom" >
                        <router-link class="a"  to="/count">计数器</router-link>
                    </li>
                    <li class="delay4" @click="boom" >
                        <router-link class="a"  to="/guess">猜数字</router-link>
                    </li>
                    <li class="delay5" @click="boom" >
                        <router-link class="a"  to="/clock">时钟屏保</router-link>
                    </li>
                    <li class="delay6" @click="boom" >
                        <router-link class="a"  to="/about">About</router-link>
                    </li><li class="delay7" @click="boom" >
                        <router-link class="a"  to="/slideshow">slideshow</router-link>
                    </li>
                    <li class="delay7" @click="boom" >
                        <router-link class="a"  to="/socket">socket</router-link>
                    </li>
                </ul>
            </ul>
            <ul class="item ul">
                <a class="a" href="#" @mouseover="see">𝓙𝓼 </a>
                <ul class="plat ul" v-show="pl" >
                    <li class="delay1" @click="boom" >
                        <router-link class="a"  to="/">Home</router-link>
                    </li>
                    <li class="delay2" @click="boom" >
                        <router-link class="a"  to="/riquanshi">日全食</router-link>
                    </li>
                    <li class="delay3" @click="boom" >
                        <router-link class="a"  to="/count">计数器</router-link>
                    </li>
                    <li class="delay4" @click="boom" >
                        <router-link class="a"  to="/guess">猜数字</router-link>
                    </li>
                    <li class="delay5" @click="boom" >
                        <router-link class="a"  to="/clock">时钟屏保</router-link>
                    </li>
                    <li class="delay6" @click="boom" >
                        <router-link class="a"  to="/about">About</router-link>
                    </li> <li class="delay7" @click="boom" >
                        <router-link class="a"  to="/slideshow">轮播图</router-link>
                    </li>
                </ul>
            </ul>
            <h1 class="echo">𝓒𝓸𝓭𝓮 𝓑𝓸𝔁 __🖍 </h1>
        </div>
        <div class="show">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "clock",
        data(){
            return{
                pl:true,
            }
        },
        methods:{
            boom(){
                this.pl = false
            },
            see(){
                this.pl = true
            }
        },
    }
</script>

<style>
    .show {
        width: 100%;
        height: 600px;
        padding-top: 20px;
        overflow: hidden;
    }
    .echo {
        top: 10px;
        right: 40px;
        font-weight: lighter;
        word-spacing: 20px ;
        position: absolute;
    }
    a:after {
        content: ' »»';
        font-size: 20px;
        position: relative;
        opacity: 0;
        top: 0;
        right: 0;
        transition: 0.7s;
        color: black;
    }
    .plat li:hover a:after {
        opacity: 1; /*从 0.0 (完全透明)到 1.0(完全不透明)。*/
        right: -30px;
    }
    .item:hover .plat { /*此处 .plat空格是有用的*/
        display: block;
        /*clear: both;*/
        z-index: 100;
        position: absolute;
    }
    .plat {
        display: none;
        /*visibility: hidden;*/
        overflow: hidden;
    }
    .plat li:hover > a {
        background-color: #f5f9fb;
        border-left: 1px solid #42B883;
    }
    li > a {
        font-size: 14px;
        text-align: left;
    }
    /*a:visited {*/
    /*    display: none;*/
    /*}*/
    .delay1 {
        animation-delay: 50ms !important;
        animation-fill-mode: backwards !important;
    }
    .delay2 {
        animation-delay: 300ms !important;
        animation-fill-mode: backwards !important;
    }
    .delay3 {
        animation-delay: 150ms !important;
        animation-fill-mode: backwards !important;
    }
    .delay4 {
        animation-delay: 80ms !important;
        animation-fill-mode: backwards !important;
    }
    .delay5 {
        animation-delay: 230ms !important;
        animation-fill-mode: backwards !important;
    }
    .delay6 {
        animation-delay: 200ms !important;
        animation-fill-mode: backwards !important;
    }
     .delay7 {
        animation-delay: 190ms !important;
        animation-fill-mode: backwards !important;
    }
    .plat li {
        background-color: #F7FBFD;
        right: 120px;
        position: relative;
        box-shadow: 0 0 1px #41B883;
    }
    .item:hover .plat li {
        right: 0;
        animation: move 0.7s ease-out;
    }
    @keyframes move {
        0% {
            right: 120px;
        }
        100% {
            right: 0;
        }
    }
    .item {
        display: block;
        background-color: #fff;
        float: left;
        margin-bottom: 30px;
    }
    .a {
        height: 20px;
        padding: 15px;
        color: #2C3E50;
        display: block;
        text-decoration: none; /*去掉a标签的下划线*/
        /*position: fixed;*/
        /*left: 0;*/
        /*top: 300px;*/
    }
    .nav{
        /*margin-top: 15px;*/
        float: left;
        padding-left: 60px;
        width: 100%;
        height: 50px;
        background-color: #fff;
        border-top: 3px solid #42B883;
    }
    .ul {
        text-align: center;
        text-decoration: none;
        list-style: none;
        width: 120px;
        font-size: 18px;
        margin: 0 auto;
    }
    ::selection {
        background: transparent;
    }
    html {
        overflow-x: hidden;
        overflow-y: auto;
    }
    * {
        margin: 0;
        padding: 0;
    }
    body {
        border-top: 1px solid #2C3E50;
        background-color: #f7fbfd;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /*align-items: center;*/
        color: #2c3e50;
        position: relative;
        /*display: flex;*/
    }
</style>
