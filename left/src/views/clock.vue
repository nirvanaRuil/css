<template>
    <div id="big">

        <div class="hr"></div>
        <div id="app">

        <div class="box one">
            <span class="ap">{{status}}</span>
            <span class="heart">{{heart}}</span>
            <span class="num">{{hour}}</span>
        </div>
        <span class="colon">:</span>
        <div class="box"><span class="num">{{min}}</span></div>
        <span class="colon">:</span>
        <div class="box"> <span class="num">{{sec}}</span></div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "clock",
        data(){
            return{
                hour:'',
                min:new Date().getMinutes(),
                sec:'',
                hourTimer:'',
                minTimer:'',
                secTimer:'',
                status:'',
                heart:' ❤'
            }
        },
        created() {
            this.getH()
            this.getS()
            this.hourTime = setInterval( () => this.getH(),1000)
            this.minTime = setInterval( () =>{
                this.min = new Date().getMinutes()
            },1000)
            this.secTime = setInterval( () =>this.getS(),1000)
        },
        beforeDestroy() {
            if (this.hourTimer||this.minTimer||this.secTimer) {
                clearInterval(this.hourTimer); // 在Vue实例销毁前，清除我们的定时器
                clearInterval(this.minTimer);
                clearInterval(this.secTimer);
            }
        },
        methods:{
            getH(){
                if (new Date().getHours() > 12){
                    this.hour = new Date().getHours() - 12
                    this.status = "PM"
                }else {
                    this.hour = new Date().getHours()
                    this.status = "AM"
                }
                return this.hour
            },
            getS(){
                if (new Date().getSeconds() < 10){
                    this.sec = '0' + new Date().getSeconds()
                }else {
                    this.sec = new Date().getSeconds()
                }
                return this.sec
            }
        },
    }
</script>

<style scoped>
    #big{
        width: 100%;
        height: 680px;
        background-color: #000000;
        align-items: center;
        /*margin:  auto;*/
        display: flex;
    }
    #app{
        height: 600px;
        width: 85%;
        background-color: #000;
        display: flex;
        margin: 0 auto;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

    }
    .box{
        float:left;
        background-color: #242424;
        width: 22em;
        height: 22em ;
        margin: 0 auto;
        border-radius: 50px;
        /*font-size: 14px;*/
        /*color: #FFFFFF;*/
        /*text-align: center;*/
        display: flex;
        align-items: center;
    }
    .one{
        position: relative;
    }
    /*.box:hover{*/
    /*    box-shadow: 0 0 10px #d0cfcf;*/
    /*}*/
    .num{
        color: #d0cfcf;
        font-size: 300px;
        margin: 0 auto;
        font-family: Arial;
        font-weight: bold;
    }
    .colon{
        font-size: 200px;
        font-weight: bold;
        color: #d0cfcf;
        font-family: FreesiaUPC ;
    }
    .ap{
        color: white;
        left:5px;
        bottom: 10px;
        padding: 10px;
        position: absolute;
        font-size: 25px;
        font-weight: bolder;
        text-shadow: 0 0 10px deeppink;
    }
    .heart {
        position: absolute;
        font-size: 25px;
        left :50px;
        bottom: 10px;
        padding: 10px;
        font-weight: bolder;
        color: white;
        text-shadow: 0 0 10px deeppink;
        animation: heart 1s linear infinite;
    }
    @keyframes heart {
        0%{transform: scale(1);}
        30%{
            transform: scale(1.15);
            color: lightpink;
            opacity: 80%;
        }
        /*50%{*/
        /*    transform: scale(1.15);*/
        /*    color: lightpink;*/
        /*    opacity: 80%;*/
        /*}*/
        65%{
            transform: scale(1.15);
            color: lightpink;
            opacity: 80%;
        }
        100%{transform: scale(1)}
    }
    .hr{
        background-color: black;
        height: 7px;
        width: 100%;
        z-index: 6;
        position: absolute;
    }
    /*::-moz-selection { !* Code for Firefox *!*/
    /*    background: transparent;*/
    /*}*/

    ::selection {
        background: transparent;
    }
</style>