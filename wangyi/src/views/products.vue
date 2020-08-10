<template>
    <div id="product">
        <van-nav-bar
                title="子产品页"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft">
        </van-nav-bar>
        <h1>这是子产品页</h1>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <div class="info">
            <span>30天无忧退货</span>
            <span>40小时极速退款</span>
            <span>满88元免邮费</span>
        </div>

        <van-cell title="请选择规格数量" is-link />

        <div class="proParams">
            <h3>商品参数</h3>
            <div class="proItem">
                <span class="title">名称:</span>
                <span class="value">参数:</span>
            </div>
        </div>


        <div style="height: 50px">
            <van-goods-action>
                <van-goods-action-icon icon="cart-o" text="购物车" />
                <van-goods-action-icon icon="star-o" text="已收藏"  @click="pro" ref="collect" />
                <van-goods-action-button type="warning" text="加入购物车"  color="#be99ff"/>
                <van-goods-action-button type="danger" text="立即购买" color="#7232dd"/>
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    import tabBtn from "../components/tabBtn.vue";
    export default {
        name: "products",
        data(){
            return{
                listActive:0,
                searchData:'',
                collect:'',
                color:'',
            }
        },
        // components: {
        //     tabBtn,
        // },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
            // onClickRight() {
            //     this.$nextTick(() => {
            //         this.pro = true
            //         this.pro = this.$refs.input.focus()
            //     })
            // },
            pro() {
                // setTimeout(() => {
                //     this.$refs.collect.style.color = '#ff5000'
                // }, 0)
            }
        },
        // mounted() {
        //     console.log(this.$refs)
        // },

    }
</script>

<style scoped lang="less">
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
    .info{
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        color: grey;
        height: 25px;
        line-height: 25px;
        background-color: lightgray;
        span{
            position: relative;
        }
        span::before{
            content: "";
            display: block;
            position: absolute;
            left: -10px;
            top: 9px;
            width: 4px;
            height: 4px;
            border-radius: 2px ;
            border: #acb234 1px solid;
        }
    }
    .van-cell{
        text-align: left;
    }
    .proParams{
        .proItem{
            margin: 10px;
            .title{
                float: left;
                margin-bottom: 10px;
            }
            .value{
                float: left;
                clear: both;
            }
        }
    }
</style>