<template>
    <div id="all">
        <h1>此刻时间</h1>

        <div class="hr"></div>
        <div id="app">
            <div class="box one">
                <span class="pm">{{status}}</span>
                <span class="heart">{{heart}}</span>
                <span class="number">{{hour}}</span>
            </div>
            <span class="colon">:</span>
            <div class="box">
                <span class="number">{{min}}</span>
            </div>
            <span class="colon">:</span>
            <div class="box">
                <span class="number">{{sec}}</span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "signal",
        data(){
            return{
                hour:'',
                min:new Date().getMinutes(),
                sec:'',
                hourTime:'',
                minTime:'',
                secTime:'',
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
    *{
        margin: 0;
        padding: 0;
    }
    #all{
        background-color: #2B2B2B;
        width: 100%;
        height: 880px;
        align-items: center;
        /*margin:  auto;*/
        display: flex;
     }
    h1{
        color:silver ;
    }
    #app{
        width: 100%;
        height: 600px;
        background-color: #000;
        /*display: flex;*/
        margin: 0 auto;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
    .box{
        height: 280px;
        width: 280px;
        border-radius: 40px;
        border: #c7254e 1px solid;
        float: left;
        margin: 100px auto;
        display: flex;
        align-items: center;
        background-color: #242424;
    }
    .one{
        position: relative;
    }
    .number{
        color: #d0cfcf;
        font-size: 200px;
        margin: 0 auto;
        line-height: 280px;
        font-family: Arial;
        font-weight: bold;
    }
    .colon{
        font-size: 200px;
        font-weight: bold;
        color: #d0cfcf;
        font-family: FreesiaUPC ;
    }
    .pm {
        color: white;
        left:5px;
        bottom: 0;
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
        bottom: 0;
        padding: 10px;
        font-weight: bolder;
        color: white;
        text-shadow: 0 0 10px deeppink;
        animation: heart 1s linear infinite;
    }
    @keyframes heart {
        0%{transform: scale(1)}
        25%{transform: scale(1.1)}
        50%{transform: scale(1.15)}
        75%{transform: scale(1.1)}
        100%{transform: scale(1)}
    }
    .hr{
        background-color: black;
        height: 7px;
        width: 100%;
        z-index: 6;
        position: absolute;
    }
</style>