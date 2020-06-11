<template>
  <div id="index">
    <van-search
      shape="round"
      placeholder="请输入搜索关键词" />
    <div class="tab">
      <span class="nav">
        <div class="nav-t">
          <img src="./icon/dinghuo.png" alt="">
        </div>
        <div class="nav-b">效果图</div>
      </span>
      <span class="nav">
        <div class="nav-t">
          <img src="./icon/guqing.png" alt="">
        </div>
        <div class="nav-b">整屋案例</div>
      </span>
      <span class="nav">
        <div class="nav-t">
          <img src="./icon/bangzhu.png" alt="">
        </div>
        <div class="nav-b">装修攻略</div>
      </span>
      <span class="nav">
        <div class="nav-t">
          <img src="./icon/baosun.png" alt="">
        </div>
        <div class="nav-b">装修分期</div>
      </span>
      <span class="nav">
        <div class="nav-t">
          <img src="./icon/chakucun.png" alt="">
        </div>
        <div class="nav-b">家居建材</div>
      </span>
      <span class="nav">
        <div class="nav-t">
          <img src="./icon/dakaiqianxiang.png" alt="">
        </div>
        <div class="nav-b">算报价</div>
      </span>
      <span class="nav">
        <div class="nav-t">
          <img src="./icon/guqing.png" alt="">
        </div>
        <div class="nav-b">设计师</div>
      </span>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="pink">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
<!--    底部/-->
    <div class="waterfall-wrapper" @click="updateWaterfall">
      <ul class="left-waterfall" ref="left">
        <li v-for="(e,index) in leftItems" :key="index">
          <a :href="['house.html?id=' + e.id]">
            <div class="item">
              <img v-lazy="e.cover_url" alt="">
            </div>
            <div class="text">{{ e.title }}</div>
            <div class="perp">
              <span><img :src="e.author_head" alt=""></span>
              <span>{{ e.author_com }}</span>
              <span>
              <img src="" alt="">
              {{ e.like_num }}
            </span>
            </div>
          </a>
        </li>
      </ul>
      <ul class="right-waterfall" ref="right">
        <li v-for="(e,index) in rightItems" :key="index">
          <a :href="['house.html?id=' + e.id]">
            <div class="item">
              <img v-lazy="e.cover_url" alt="">
            </div>
            <div class="text">{{ e.title }}</div>
            <div class="perp">
              <span><img :src="e.author_head" alt=""></span>
              <span>{{ e.author_com }}</span>
              <span>
              <img src="" alt="">
              {{ e.like_num }}
            </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Search, Swipe, SwipeItem } from 'vant'
import 'vant/lib/search/style'
import 'vant/lib/swipe/style'
import 'vant/lib/swipe-item/style'
// 数据获取
import { gethome } from '../api'

export default {
  name: 'index',
  data () {
    return {
      images: [
        'http://pic1.win4000.com/wallpaper/c/57a830aa043a9.jpg',
        'http://pic1.win4000.com/wallpaper/6/58aa79fc8d7f9.jpg',
        'http://pic1.win4000.com/wallpaper/b/5878a085eb9c7.jpg',
        'http://pic1.win4000.com/wallpaper/2018-01-30/5a70007549b96.jpg',
        'http://pic1.win4000.com/wallpaper/d/570c65cc2e8bb.jpg'
      ],
      data: [],
      leftItems: [],
      rightItems: []
    }
  },
  created () {
    gethome().then((res) => {
      console.log(res)
      this.data = res
      this.updateWaterfall()
    })
  },
  mounted () {
    // TODO GET DISPLAY_DATA
    this.updateWaterfall()
  },
  methods: {
    updateWaterfall () {
      const leftHeight = this.$refs.left.clientHeight
      const rightHeight = this.$refs.right.clientHeight
      const item = this.data.shift()
      if (item == null) {
        return
      }
      if (leftHeight <= rightHeight) {
        this.leftItems.push(item)
      } else if (leftHeight > rightHeight) {
        this.rightItems.push(item)
      }
      this.$nextTick(function () {
        this.updateWaterfall()
      })
    }
  },
  components: {
    [Search.name]: Search,
    [SwipeItem.name]: SwipeItem,
    [Swipe.name]: Swipe
  }
}
</script>

<style scoped>
  #index {
    width: 100%;
  }
  .tab {
    width: 100%;
    font-size: 12px;
  }
  .tab span {
    float: left;
    text-align: center;
    width: 20%;
    margin: 10px 0;
  }
  .nav img {
    width: 20px;
  }
  .my-swipe {
    border-radius: 5px 5px 5px;
    width: 90%;
    margin: 0 5%;
    color: #fff;
    font-size: 20px;
    height: 80px;
    line-height: 50px;
    text-align: center;
    background-color: #39a9ed;
  }
  .my-swipe img {
    width: 100%;
    height: 100%;
  }
  .waterfall-wrapper {
    width: 100%;
  }
  ul {
    width: 44%;
    margin-top: 10px;
  }

  ul.left-waterfall {
    float: left;
    margin-left: 5%;
    text-align: center;
  }

  ul.right-waterfall {
    float: right;
    margin-right: 5%;
    text-align: center;
  }
  div.item {
    border-radius: 10px 10px 10px
  }
  div.item img {
    width: 100%;
  }
  .text {
    text-align: center;
    font-size: 12px;
  }
  .perp {
    position: relative;
    font-size: 12px;
  }
  .perp span {
    position: relative;
    vertical-align: center;
  }
  .perp span:first-child {
    left: -30px;
    vertical-align: center;
  }
  .perp span img {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  .perp span:nth-child(2) {
    left: -25px;
  }
  .perp span:last-child {
    right: -30px;
  }
  a {
    text-decoration: none;
    color: black
  }
</style>
