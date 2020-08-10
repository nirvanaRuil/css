<template>
    <div id="categoryList">
        <van-nav-bar
                title="产品页"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft" />
        <h1>这是category下面的一页</h1>
        <van-tabs v-model="listActive">
            <van-tab title="标签 1" >内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
        <van-grid :column-num="2" :gutter="10">
            <van-grid-item icon="photo-o" text="文字" to="/products"/>
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
        </van-grid>

        <div style="height: 50px">
            <tab-btn></tab-btn>
        </div>

    </div>
</template>

<script>
    import tabBtn from "../components/tabBtn.vue";
    export default {
        name: "categorylist",
        data(){
          return{
              listActive:0,
          }
        },
        components: {
            tabBtn,
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1)
            },
        },
    }
</script>

<style scoped>

</style>