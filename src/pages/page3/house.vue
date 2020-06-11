<template>
   <div id="house">
     <div class="head-t">
       <t-head class="head-tt">
       </t-head>
       <img style="width: 100%;" :src="products.cover_url" alt="">
     </div>
     <div class="house-cont">
       <h3>{{ products.title }}</h3>
       <div class="cont-t">
         {{ products.my_style }}
       </div>
       <div class="cont-c">
         <span class="cont-c_l">
           <img :src="products.author_head" alt="">
         </span>
         <span class="cont-c_m">
           <div class="cont-c_t">
             {{ products.author_com }}
           </div>
           <div class="cont-c_s">
             {{ products.author_address }}
<!--             <star :star="3" :size="10 + 'px'"></star>-->
           </div>
         </span>
         <span class="cont-c_r">
           <van-button
           type="default"
           size="normal"
           round>关注</van-button>
         </span>
       </div>
     </div>
     <div class="conten" v-html="products.content"></div>
   </div>
</template>

<script>
import THead from '../../components/back/back'
// import Star from '../../components/Star/star'
import { Button } from 'vant'
import 'vant/lib/button/style'
import { getdetail } from '../api'

const id = window.location.href.split('?')[1].split('=')[1]
export default {
  name: 'house.html',
  data () {
    return {
      products: {}
    }
  },
  created () {
    getdetail({
      id
    }).then((res) => {
      this.products = res
    })
  },
  components: {
    THead,
    // Star,
    [Button.name]: Button
  }
}
</script>

<style scoped>
  .van-hairline--bottom {
    background: rgba(255, 255, 255, 0);
  }
  #house {
    margin-bottom: 30px;
  }
  .house-cont {
   padding: 10px 10px;
  }
  .head-tt {
    position: absolute;
  }
  .cont-t {
    font-size: 12px;
    color: rgba(30, 35, 38, 0.32);
    padding: 0 10px;
    text-align: left;
    border-right: 1px solid #511E2326;
  }
  .cont-t span:last-child {
    border-right: none;
  }
  .cont-c {
    display: flex;
    width: 80%;
    margin: 5%;
    background: rgba(81, 30, 35, 0.16);
    border-radius: 10px 10px 10px;
    padding: 5%;
  }
  .cont-c_l {
    width: 20%;
  }
  .cont-c_m, .cont-c_r {
    flex: 1;
    width: 20%;
  }
  .cont-c_l img {
    width: 40px;
    height: 40px;
  }
  .cont-c_t {
    margin-bottom: 3px;
  }
  .cont-c_r {
    width: 100%;
    text-align: center;
    margin: auto 0;
  }
  .cont-c_s {
    font-size: 12px;
  }
  .van-button {
    width: 100%;
  }
  .conten >>>  img {
    width: 100%;
  }
</style>
