<template>
  <div class="content">
    <div class="cont" v-for="(item, index) in list" :key="index">
      <a :href="['xiangqing.html?id=' + item.id]">
        <div class="cont-l">
          <img :src="item.cover_url" class="cont-l-i" alt="">
        </div>
        <div class="cont-r">
          <div class="cont-r-t">{{ item.title }}</div>
          <div class="cont-r-c">
            <star :size="15+'px'" :star="item.star_num"></star>
            <div class="rig">
              <span>{{ item.comment_num }}条</span>
              <span>日记{{ item.diary_num }}篇</span>
            </div>
            <div class="co">
              <span>先装修后支付</span>
              <span>免费效果图</span>
              <span>装修分期</span>
            </div>
          </div>
          <div class="cont-r-b">
            <div>
              <span>近期签约用户{{ item.contract_num }}户</span>
              <span>{{ item.price }}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { Row, Col } from 'vant'
import 'vant/lib/row/style'
import 'vant/lib/col/style'
import Star from '../../components/Star/star'
export default {
  name: 'Mcont',
  props: {
    list: {
      type: Array
    }
  },
  components: {
    Star,
    [Row.name]: Row,
    [Col.name]: Col
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
  .cont {
    position: relative;
    width: 100%;
    padding: 0;
    border-bottom: 1px solid rgba(44, 62, 80, 0.04);
  }
  .cont-l, .cont-r {
    display: inline-block;
    clear: both;
    margin:0px 0 23px 0;
    white-space : nowrap;
  }
  .cont-l {
    width: 20%;
    text-align: center;
  }
  .cont-l-i {
    width: 80px;
    height: 80px;
    border: black;
    margin: 10px 100px 0 10px;
  }
  .cont-r {
    position: absolute;
    left: 100px;
    padding: 10px 10px;
    font-size: 16px;
  }
  .cont-r > div {
    margin-bottom: 10px;
  }
  .cont-r > div:last-child {
    margin-bottom: 0px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.43);
  }
  .cont-r-b {
    margin-right: 10px;
  }
  .cont-r-c {
    position: relative;
    color: rgba(0, 0, 0, 0.43);
    font-size: 14px;
  }
  .rig {
    position: absolute;
    top: 0px;
    right: 30px;
  }
  .rig span {
    margin-left: 10px;
  }
  .co {
    font-size: 12px;
    margin: 12px 0;
  }
  .co span {
    position: relative;
    padding: 1px 5px;
    border: 1px solid rgba(0, 0, 0, 0.27);
    margin: 0 3px;
  }
  .co span:last-child {
    margin-right: 0;
  }
</style>
