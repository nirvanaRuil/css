<template>
    <div class="demo1">
        <h1>这是一个新demo!!!数据绑定</h1>
        <p>{{msg}}</p>
        <div>
            {{type + ':' + msg}}
        </div>
        <div  :title="tit">这里有一个title属性</div>
        <div  :[dong]="tit">这里有一个动态属性</div>
    </div>
</template>

<script>
    export default {
        name: "demo1",
        data(){
            return{
                msg:'demoooo',
                type:'photo',
                tit:'快看这有一个title!!!',
                dong:'tit'
            }
        },
        mounted() {
            setTimeout(() =>{
                this.msg = 'tototototo',
                this.dong = 'msg'
            },3000)
        //间隔多久再改变
        }
    }
</script>

<style scoped>
    div{
        font-family: 华文行楷 ;
        font-size: 24px;
        color: darkred;

    }
</style>