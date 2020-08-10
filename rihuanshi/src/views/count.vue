<template>
    <div>
    <div id="app">
        <button class="btn1" @click="subtract" :disabled="isAnimating">-</button>
        <span class="sp" :class="{before:isBefore,after:isAfter}" :data-before="countBefore" :data-after="countAfter">{{count}}</span>
        <button class="btn1" @click="add" :disabled="isAnimating">+</button>

    </div>
        <button class="button"  @click="start"><span>开始</span></button>
        <button class="button" @click="stop"><span>重置</span></button>
        <br><hr>
        <br>
<!--        <h1>{{currentTime}}</h1>-->
    <div id="time">
        <h1>{{currentTime}}</h1>
    </div>
    </div>
</template>

<script>
    console.log("hello");
    console.log(new Date())
    export default {
        name: "count",
        data(){
            return {
                timer: "",
                count:'0',
                countBefore: -1,
                countAfter: 1,
                isBefore:false,
                isAfter:false,
                currentTime:'',
                intervalId : null,
            }
        },
        computed:{ //这个里面的函数  是保持监测运行的
           isAnimating(){
               return this.isBefore||this.isAfter
           }
        },
        methods:{
            start(){
                if (this.intervalId != null) return;
                this.intervalId = setInterval(() => {
                    this.add()
                },1000)
            },
            stop(){
                this.count = 0;
                this.countBefore = -1;
                this.countAfter = 1;
                clearInterval(this.intervalId);
                this.intervalId = null;

            },
            subtract(){
                this.isBefore = true
                setTimeout(() => {
                    this.count--
                    this.countBefore = this.count-1
                    this.countAfter = this.count+1
                    this.isBefore = false
                },200)

            },
            add(){
                this.isAfter = true
                setTimeout(() => {
                    this.count++
                    this.countBefore = this.count-1
                    this.countAfter = this.count+1
                    this.isAfter = false
                },200)
            },
        },
        created() {
            // let _this = this; //声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(() => {
                this.currentTime = new Date()//修改数据date
                    // new Date().getFullYear() +
                    // "-" +
                    // (new Date().getMonth() + 1) +
                    // "-" +
                    // new Date().getDate() +
                    // " " +
                    // new Date().getHours() +
                    // ":" +
                    // new Date().getMinutes() +
                    // ": " +
                    // new Date().getSeconds();
            }, 1000);
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
            }
        }
    }
</script>

<style scoped>
   /*:root{*/
   /*     font-size: 100px;*/
   /*     font-family: Helvetica;*/
   /* }*/
   .button {
       position: relative;
       display: inline-block;
       border-radius: 14px;
       background-color: #282c34;
       /*border: none;*/
       color: #FFFFFF;
       text-align: center;
       font-size: 20px;
       padding: 10px;
       width: 120px;
       transition: all 0.5s;
       cursor: pointer;
       margin: 25px 10px;
       border: 1px solid dimgray;
       overflow: hidden;
   }
   .button:hover{
       text-shadow: 0 0 10px white;
       font-weight: revert;
       box-shadow: 2px 3px 6px  #282c34;
   }
   .button span {
       cursor: pointer;
       display: inline-block;
       position: relative;
       transition: 0.5s;
   }
   /*.button:hover span {*/
   /*    padding-right: 25px;*/
   /*}*/
   .button span:after {
       content: '»';
       position: absolute;
       opacity: 0;
       top: 0;
       right: 0;
       transition: 0.1s;
   }
   .button span:before {
       content: '«';
       position: absolute;
       opacity: 0;
       top: 0;
       right: 30px;
       transition: 0.1s;
   }
   .button:active{
       transform: translateY(5px);
       transition: 0.2s;
   }

   .button:hover span:after {
       opacity: 0.6; /*从 0.0 (完全透明)到 1.0(完全不透明)。*/
       right: -30px;
   }
   .button:hover span:before {
       opacity: 0.6;
       right: 60px;
   }
   .button:active span:after {
       opacity: 1; /*从 0.0 (完全透明)到 1.0(完全不透明)。*/
       right: -10px;
   }
   .button:active span:before {
       opacity: 1;
       right: 40px;
   }
   .button span {
       cursor: pointer;
       display: inline-block;
       position: relative;
       transition: 0.5s;
   }

   body{
       /*display: flex;*/
       /*justify-content: center;*/
       align-items: center;
       min-height: 100vh;
   }
    .sp{
        color: white;
        display: block;
        flex: 1 1 500px;
        font-size: 100px;
        line-height:100px;
        text-align: center;
        /*color: blue;*/
        transform: translateY(0px);
        /*transition: transform .5s linear;*/
    }
   .sp .before{
       transform: translateY(100px);
       transition: transform .2s linear;
   }
   .sp.after{
       transform: translateY(-100px);
       transition: transform .2s linear;
   }
   .sp::before{
        display: block;
        content:attr(data-before) ;
    }
   .sp::after{
        display: block;
        content:attr(data-after);
    }

   .btn1{
       font-family:"JetBrains Mono";
       flex: 0 0 120px;
       border: 0;
       background: none;
       color: #ffffff;
       font-size: 100px;
       /*font-weight: bold;*/
       line-height: 100px;
       padding: 0;
       margin: 0;
       width: 100px;
       height: 100px;
       position: relative;
       z-index: 100;
       outline: none; /*防止点击按钮的时候出现按钮边框*/
   }
   .btn1:hover{
       text-shadow: 0 0 10px white;
       font-weight: bolder;
   }

    #app{
        align-items: center;
        margin: auto;
        width: 450px;
        height: 175px;
        background-color: #000000;
        border-radius: 30px;
        display: flex;
        overflow: hidden;
        padding: .3rem 0;
        position: relative;
        box-shadow: 0 3px 12px rgba(0,0,0,0.5);
    }
    #app:after{
        /*蒙版*/
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background:linear-gradient(180deg,rgba(0,0,0,0.6) 0%,
        rgba(0,0,0,0) 30%,rgba(0,0,0,0)70%,rgba(0,0,0,0.6)100%);
        /*0deg就是代表从底部到头部的渐变，180deg则相反*/
        width: 100%;
        height: 100%;
    }
   #time{
       margin: auto;
       width: 600px;
       height: 80px;
       background-color: #000000;
       border-radius: 30px;
       display: flex;
       overflow: hidden;
       padding: 30px 0;
       position: relative;
       box-shadow: 0 3px 12px rgba(0,0,0,0.5);
   }
    h1{
        color: white;
    }


</style>