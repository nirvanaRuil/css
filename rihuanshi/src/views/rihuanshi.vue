
<template>
    <div>
        <div class="log"> 阴天看不到日全食就在这里看吧
            <br><br><br><br><br><br><br><br><br>
        </div>

        <div class="rishi rishi-before"></div>
        <div class="rishi rishi-after"></div>

    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
    .log{
        font-size: 23px ;
        margin-top: 20px;
        font-family: 仿宋;
        font-weight:bold;
        /*text-shadow:  0px 0px 2px darkgray;*/
    }
    *{
        margin: 0;
        padding: 0;

    }
    .log{
        background: skyblue;
        /*动画*/
        animation: bgChange 3s linear infinite;
    }
    h1{
        text-shadow: 1px 1px 3px darkgray;
        margin-top: 30px;
        font-style: italic;
        font-family:"monospace" ;
    }
    .rishi{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 88px;
        height: 88px;
        border-radius: 100%;
        margin: auto;
    }
    .rishi-after{
        animation: rishi 3s linear infinite;
    }
    .rishi-before{
        background: #ffffff;
        animation: shadow 3s linear infinite;
    }
    /*编写动画*/
    @keyframes bgChange {
        0%,100%{
            background: skyblue;
        }
        45%,60%{
            background: #282c34;
        }
        100%{
            background: skyblue;
    }
    }
    @keyframes shadow {
        50%{
            box-shadow: 0 0 10px 11px #ffffff;
        }
    }
    @keyframes rishi {
        0%{
            left: 300px;
            top: 100px ;
            background: skyblue;
        }
        45%,60%{
            left: 0;
            top: 0;
            background: #282c34;
        }
        100%{
            top: -100px;
            left:-300px ;
            background: skyblue;
        }
    }

</style>








