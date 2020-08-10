<template>
    <div id="category">
        <h1>category</h1>
        <van-search v-model="searchData" placeholder="分类好物" />

        <van-tree-select
            :items="cateItems"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
            height="80vh" >
<!--      通过content插槽可以自定义右侧区域的内容
          如果有数据的话就直接在下面循环了哦~-->
            <template #content>
                <img src="bannerImg" alt=""  width="100%"/>
                <van-image
                        v-if="activeIndex === 0"
                        src="https://img.yzcdn.cn/vant/apple-1.jpg"
                />
                <van-image
                        v-if="activeIndex === 1"
                        src="https://img.yzcdn.cn/vant/apple-2.jpg"
                />
                <van-image
                        v-if="activeIndex === 2"
                        src="https://img.yzcdn.cn/vant/apple-3.jpg"
                />
                <van-grid :column-num="3">
                    <van-grid-item icon="photo-o" text="文字" to="/categorylist" />
                    <!-- 这里to,又是点击宫格之后加载的东西 :to="'/category/' + item.id"  -->
                    <van-grid-item icon="photo-o" text="文字" />
                    <van-grid-item icon="photo-o" text="文字" />
                    <van-grid-item icon="photo-o" text="文字" />
                </van-grid>
            </template>
        </van-tree-select>

        <div style="height: 50px">
            <tab-btn></tab-btn>
        </div>
    </div>
</template>

<script>
    import tabBtn from "../components/tabBtn.vue";
    // import axios from 'axios'
    // import api from '../assets/config/api.js'

    export default {
        name: "category",
        data(){
            return{
                tabActive:0,
                searchData:'',
                cateItems:[{ text: '分组 1' }, { text: '分组 2' },{ text: '分组 3' },],
                activeId: 1,
                activeIndex: 0,
                bannerImg:'',
            }
        },
        components: {
            tabBtn,
        },
        // async created(){   数据数据  完了之后还要监听数据
        //   let res = await axios.get(api.CatalogList)
        //   let data = res.data;
        //    this.bannerImg = this.data.cateCategory.banner_url
        // },
        computed:{
           // items(){
           //    if( this.data.categoryList == undefined ){
           //          return []
           //    }else{
           //          let arr = []
           //          this.data.categoryList.forEach((item,index) => {
           //              item.text = item.name
           //              arr.push(item)
           //          })
           //          return arr;
           //    }
           // }
        },
    }
</script>

<style scoped lang="less">
    .van-image{
        height: 180px;
        width: 220px;
    }
</style>