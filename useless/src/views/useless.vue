<template>
    <div class="alert">
        <div class="zhezhao">
            <div class="alertMain">
                <div class="title" :title="title">
                    温馨提示:
                </div>
                <div class="content" :content="content">
                    即将删除某个内容:
                </div>
                <div class="btnList">
                    <div class="btn cancel" @click="cancelEvent" v-show="isShow">取消</div>
                    <div class="btn confirm" @click="confirmEvent" v-show="isShow">确认</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "useless",
        // props:['title','content','cancelEvent','confirmEvent'],
        data(){
            return{
                title:"跳转页面",
                content:'是否要跳转至百度',
                isShow:true,
            }
        },
        methods:{
            cancelEvent(){
                this.isShow = false
            },
            confirmEvent(){
                location.href = 'http://www.baidu.com'
            }
        }
    }
</script>

<style scoped lang="less">
    @theme-color:orange;
    @default-size:18px;
    @font-color:#dddca2;
    @zhezhaoOpa:0.4;
    .fullScreen(){
        width: 100vw;
        height: 100vh;
        display: flex;
    }
    .defaultPadding(){
        padding: 10px;
    }
    .button(@padding:20px){
        padding: 20px;
        text-align: center;
    }
    .alert{
        .fullScreen();
        .zhezhao{
            .fullScreen();
            background: rgba(0,0,0,@zhezhaoOpa);
            justify-content: center;
            align-items: center;
        }
    }
    .alertMain{
        width: 400px;
        height: 300px;
        background: white;
        display: flex;
        flex-direction: column;
        position: relative;
        .title{
            font-size: @default-size;
            height: 50px;
            background-color: @theme-color;
            color: @font-color;
            .defaultPadding();
            text-align: left;
            line-height: 50px;
            font-weight: 900;
        }
        .content{
            .defaultPadding();
            font-size: @default-size;
        }
        .btnList{
            position: absolute;
            left: 0;
            bottom: 0;
            display: flex;
            width: 100%;
        }
        .btn{
            .button();
            width: 50%;
        }
        .cancel{
            background-color: pink;
            color: @font-color;
        }
        .confirm{
            background-color: darkseagreen;
        }
    }



</style>