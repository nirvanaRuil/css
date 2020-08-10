<template>
    <div id="app" style="text-align: center" >
        <h2>请猜一个1-100的随机数字</h2>
        <h3 style="color: #c7254e">倒计时:{{time}}秒</h3><br>
        <hr>
        <br><br>
        <h2>随机数是{{randomNum}}! </h2>
        <input type="text" v-model="guessNum" @focus="guessNum=''"><br><br>
        <button class="button" :disabled="flag" @click="judge"><span>确定</span></button>
        <button class="button" @click="newGame"><span>重置</span></button>
        <h2 >您一共猜了{{count}}次</h2>

        <transition mode="out-in">
            <componment :is="comName"></componment>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "guessNum",
        data() {
            return {
                flag:false,
                comName: 'start',
                randomNum: 0,
                guessNum: '',
                intervalWin: null,
                count: 0,
                time: '20.000',
                intervalId: null,
            }
        },
        methods:{
            judge(){
                if(this.guessNum == ''|| this.guessNum == null) return
                    if (this.randomNum == this.guessNum) {
                        this.flag = true
                        this.comName = 'win'
                        this.count++
                        clearInterval(this.intervalId);
                        this.intervalId = null
                        return
                    } else if (this.guessNum != null && this.guessNum != '') {
                        this.comName = 'lose'
                        this.count++
                    }
                    if (this.intervalId != null) return;
                    this.intervalId = setInterval(() => {
                        this.time=(this.time-0.001).toFixed(3)
                    }, 1)
                },
            newGame(){
                clearInterval(this.intervalId);
                this.comName ='start'
                this.time="20.000"
                this.intervalId=null
                this.count=0
                this.guessNum = null
                this.randomNum = Math.floor(Math.random()*100+1)
                this.flag = false
            }
        },
        components:{
            win:{
                template:'<h1  style="color: #c7254e ;font-size: 40px;text-shadow: 2px 2px 2px black;">恭喜你猜对了!!!</h1>',
            },
            start:{
                template:' <h2 > 输入一个数字开始吧!</h2>'
            },
            lose:{
                template:' <h2 style="color: cadetblue ">不对不对,请再试试!</h2>'
            }
        },
        watch:{
            time(v1){
                if (v1==-0.001){
                    alert("时间到,您一共猜了" + this.count + "次,\n点击确定游戏将重置")
                    this.newGame();
                }
            }
        },
        created(){
                this.randomNum = Math.floor(Math.random()*100+1)
            },
    }
</script>
<style scoped>
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

    /*.button:after {*/

    /*    content: " ";*/
    /*    background: #FFFFFF;*/
    /*    display: flex;*/
    /*    position: absolute;*/
    /*    padding-top: 150%;*/
    /*    padding-left: 150%;*/
    /*    margin-left: -10px!important;*/
    /*    margin-top: -70%;*/
    /*    opacity: 0;*/
    /*    transition: all 0.5s*/
    /*    */
    /*}*/
    /*.button:active:after{*/
    /*    padding: 0;*/
    /*    margin: 0;*/
    /*    opacity: 1;*/
    /*    transition: 0s*/
    /*}*/



    #app{
        color:black;
        background: #d0cfcf;
        height: 400px;
        margin: auto auto;
        padding-top: 60px;
    }
    .v-enter,
    .v-leave-to {
        color: #eea236;
        opacity: 10%;
        transform: translateX(300px);
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.4s ease;
        text-shadow: 3px 3px 1px #d0cfcf;
    }
</style>