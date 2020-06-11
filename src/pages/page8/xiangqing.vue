<template>
    <div id="xiangqing">
      <div class="head">
        <t-head></t-head>
      </div>
      <div class="cont">
        <div class="cont-t">
          <h3>{{ date.title }}</h3>
          <s-tar :star="date.star_num"></s-tar>
          <div class="pinglun">{{ date.comment_num }}条</div>
          <span>{{ date.diary_num }}篇业主日记</span>
          <span>设计过{{ date.design_num }}个小区户型</span><br>
        </div>
        <span>地址🚩：{{ date.address }}</span><br>
        <span>电话📞：{{ date.phone_num }}</span>
      </div>
      <div class="jieshao">
        <div class="div">
          <span>
            <h4>公司介绍</h4>
          </span>
          <span>特色服务， 资质荣誉</span>
        </div>
        <div class="conttb" v-html="date.introduce"></div>
      </div>
    </div>
</template>

<script>
import { getListdatil } from '../api'
import THead from '../../components/back/back'
import STar from '../../components/Star/star'
const id = window.location.href.split('?')[1].split('=')[1]
export default {
  name: 'xiangqing',
  data () {
    return {
      date: {}
    }
  },
  created () {
    getListdatil({
      id
    }).then((res) => {
      this.date = res
    })
  },
  components: {
    THead,
    STar
  }
}
</script>

<style scoped>
  .cont > span {
    padding: 0 0 0 20px;
  }
  .cont-t {
    position: relative;
    margin: 20px;
  }
  .cont-t span {
    padding: 1px 10px;
    background: rgba(255, 192, 203, 0.33);
    margin-right: 30px;
    color: rgba(255, 0, 0, 0.88);
    font-size: 12px;
  }
  .pinglun {
    position: absolute;
    right: 150px;
    bottom: 20px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.25);
  }
  .conttb >>> img {
    width: 100%;
  }
</style>
