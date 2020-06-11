<template>
<!--  喜欢 收藏 转发 评论-->
  <div class="cont">
    <span>
      <img :src="src.m" @click="bian" alt="">
      <span>{{ num1 }}</span>
    </span>
    <span>
      <img :src="shocan.m" width="18px" @click="shoucang" alt="">
      <span>{{ num2 }}</span>
    </span>
    <span>
      <img :src="pinlu.m" width="18px" @click="pinglun" alt="">
      <span>{{ num3 }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'shoucang',
  data () {
    return {
      src: {
        m: require('./xihuan-n.png'),
        v: require('./xihuan-s.png')
      },
      shocan: {
        m: require('./shoucang-n.png'),
        v: require('./shoucang-s.png')
      },
      pinlu: {
        m: require('./pinglun-n.png'),
        v: require('./pinglun-s.png')
      }
    }
  },
  props: {
    num1: {
      type: Number
    },
    num2: {
      type: Number
    },
    num3: {
      type: Number
    }
  },

  methods: {
    bian () {
      this.src.m = this.src.v
      this.num1 = this.num1 + 1
      console.log(this.num1)
    },
    shoucang () {
      this.shocan.m = this.shocan.v
      console.log(this.num2)
    },
    pinglun () {
      this.pinlu.m = this.pinlu.v
      console.log(this.num3)
    }
  }
}
</script>

<style scoped>
  .cont {
    display: flex;
    margin-top: 30px;
  }
  .cont span {
    flex: 1;
    text-align: center;
  }
  .cont span span {
    margin-left: 4px;
  }
</style>
