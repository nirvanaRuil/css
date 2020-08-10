<template>
  <div class="home">
    <van-search v-model="searchData" placeholder="商品搜索 共239万款好物" />
    <van-swipe :autoplay="3000" :width="375" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swiperImg"/>
      </van-swipe-item>
    </van-swipe>

    <van-grid square column-num="5">
<!--      <van-grid-item v-for="(item,index) in chanel" :key="index" icon="photo-o" text="文字" />-->
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid >

    <div class="brandList">
        <van-cell-group center >
          <van-cell title="品牌制造商直供"  />
        </van-cell-group>
        <van-grid  :column-num="2">
            <van-grid-item  >
              <h4 class="title">xxx供应商</h4>
              <p class="brief">xx元起</p>
            <!--在这儿为什么我的字加不到图片上面去嗷!!迷惑选项-->
              <van-image fit="cover" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
            <van-grid-item >
              <h4 class="title">xxx供应商</h4>
              <p class="brief">xx元起</p>
              <van-image fit="cover" src="https://img.yzcdn.cn/vant/apple-2.jpg"/>
            </van-grid-item>
            <van-grid-item >
              <h4 class="title">xxx供应商</h4>
              <p class="brief">xx元起</p>
              <van-image fit="cover" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item >
              <h4 class="title">xxx供应商</h4>
              <p class="brief">xx元起</p>
              <van-image fit="cover" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
        </van-grid>
    </div>

    <div class="newList">
      <van-cell-group center >
        <van-cell title="新品尝鲜"  />
      </van-cell-group>
      <van-grid  :column-num="2">
        <van-grid-item  >
          <h4 class="title van-ellipsis">xxx</h4>
          <p class="brief">xx元起</p>
          <!--在这儿为什么我的字加不到图片上面去嗷!!迷惑选项-->
          <van-image fit="cover" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
        <van-grid-item >
          <h4 class="title van-ellipsis">xxx</h4>
          <p class="brief">xx元起</p>
          <van-image fit="cover" src="https://img.yzcdn.cn/vant/apple-2.jpg"/>
        </van-grid-item>
        <van-grid-item >
          <h4 class="title van-ellipsis">xxx</h4>
          <p class="brief">xx元起</p>
          <van-image fit="cover" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        <van-grid-item >
          <h4 class="title van-ellipsis">xxx</h4>
          <p class="brief">xx元起</p>
          <van-image fit="cover" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
      </van-grid>
    </div>

    <div class="hotList">
      <van-cell-group >
        <van-cell title="人气推荐"  />
        <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #tags>
          <van-tag plain type="danger">八折</van-tag>
          <van-tag plain type="danger">新品</van-tag>
        </template>
        </van-card>
        <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
        <van-card
                num="2"
                price="6.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
      </van-cell-group>
    </div>

    <div style="height: 50px">
      <tab-btn></tab-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
// import api from '../assets/config/api.js'

import Vue from 'vue'
import { Lazyload } from 'vant';
Vue.use(Lazyload);
import tabBtn from "../components/tabBtn.vue";

export default {
  name: 'Home',
  data(){
    return{
      searchData:'',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
        tabActive:0,
    }
  },
  computed:{

  },
  components: {
    tabBtn,
  }
}
</script>

<style lang="less" >
  /*#app{*/
  /*  text-align: center;*/
  /*}*/
  .home{
    .swiperImg{
      height: 200px;
      width: 375px;
    }
      .van-grid-item__content{
        padding: 2px 2px;
      /*  .....在查看器里查看库默认的类名然后更改,操作学到了*/
      }
    .van-image__img{
      border: lightgray solid 1px;

    }
    .title{
      position: absolute;
      top: 10px;
      left: 5px;
      color: grey;
    }
    .brief{
      position: absolute;
      top: 35px;
      left: 5px;
      color: grey;
    }
    .hotList{
      .van-tag{
        padding: .2em .5em;
        margin: 2px;

      }
      .van-card__content {
        text-align: left ;
      }
    }
  }
</style>