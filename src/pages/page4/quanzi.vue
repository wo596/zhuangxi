<template>
    <div id="quanzi">
      <div class="head">
          <van-search
            shape="round"
            show-action
            placeholder="请输入搜索关键词"
          >
            <template #action>
              <div @click="toBianji">
                <van-icon
                  name="add-o"
                  size="20px"
                  color="rgb(17, 17, 17)"
                />
              </div>
            </template>
          </van-search>
        </div>
      <span class="text" v-html="text"></span>
      <div v-for="(item, index) in list" :key="index" class="con">
        <div class="cont-t">
          <span class="per">
            <van-image
              width="50px"
              height="50"
              :src="item.head_url"
              fit="cover"
              round></van-image>
            <!--          <img src="./xin.jpg" alt="">-->
          </span>
          <span class="nam">{{ item.real_name }}</span>
          <span class="guaz">关注</span>
        </div>
        <div class="cont-b">
          <div class="contb-t">
            {{ item.content }}
          </div>
          <div class="contb-c">
            <van-grid :border="false" :column-num="2">
              <van-grid-item v-for="(it, indeed) in item.image_url" :key="indeed">
                <van-image fit="cover" :src="it" />
              </van-grid-item>
            </van-grid>
            <div class="lianji">
            <span>
              <img src="./lianjie.png" alt="">
            </span>
              <span>人人都爱一家风</span>
            </div>
          </div>
          <v-cont :num1="item.like_num" :num2="item.collect_num" :num3="item.comment_num"></v-cont>
        </div>
      </div>
    </div>
</template>

<script>
import { Search, Icon, Grid, GridItem, Image } from 'vant'
import 'vant/lib/search/style'
import 'vant/lib/icon/style'
import 'vant/lib/grid/style'
import 'vant/lib/grid-item/style'
import 'vant/lib/image/style'
import VCont from '../../components/shoucang/shoucang'

import { getquanzi } from '../api'

export default {
  name: 'quanzi',
  data () {
    return {
      show: false,
      list: [],
      imgs: [],
      text: ''
    }
  },
  created () {
    console.log(this.item)
    getquanzi().then((res) => {
      this.list = res
      if (this.list === null) {
        this.text = '<p>页面没有数据,<br>请稍后重试</p>'
      }
    }).then(() => {
      this.list.forEach((item) => {
        const imgs = item.image_url.split(',')
        item.image_url = imgs
      })
    })
  },
  methods: {
    toBianji () {
      window.location.href = 'bianji.html'
    }
  },
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    VCont
  }
}
</script>

<style scoped>
  .van-search__action {
    text-align: center;
    margin-top: 10px;
  }
  .cont-t {
    width: 94%;
    height: 50px;
    padding: 0 3%;
    margin: 5px;
  }
  .cont-t span {
    float: left;
  }
  .cont-t .per {;
    margin-right: 10px;
  }
  .nam, .guaz {
    margin-top: 15px;
  }
  .cont-t span:last-child {
    float: right;
    margin-right: 30px;
    background: #7fffaa;
    padding: 1px 20px;
    border: 1px solid #000;
    border-radius: 15px 15px 15px;
  }
  .cont-b {
    width: 94%;
    height: 100%;
    margin: 3%;
  }
  .lianji {
    position: absolute;
    background: rgb(245, 247, 250);
    padding: 1px 10px;
    color: rgb(17, 17, 17);
    border-radius: 15px 15px 15px;
  }
  .lianji span:first-child img {
    font-size: 12px;
    text-align: center;
    background: rgb(99, 214, 164);
  }
  .lianji span img {
    margin-bottom: 0px;
    margin-right: 3px;
    border-radius: 50%;
  }
  .contb-b {
    display: flex;
  }
  .contb-b > span {
    flex: 1;
  }
  .text {
    width: 100%;
    position: absolute;
    text-align: center;
    margin-top: 30%;
    color: #C8C9CC;
  }
</style>
