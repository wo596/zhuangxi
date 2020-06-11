<template>
  <div class="back">
    <van-nav-bar
      :title="cen"
      :left-text="lef"
      :right-text="rig"
      left-arrow
      @click-left="onClickLeft">
      <template #left>
        <img src="./zuo.png" style="width: 20px;height: 20px;" alt="">
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import 'vant/lib/nav-bar/style'
export default {
  name: 'back',
  props: {
    cen: {
      type: String
    },
    lef: {
      type: String
    },
    rig: {
      type: String
    }
  },
  methods: {
    onClickLeft () {
      window.history.back()
    }
  },
  components: {
    [NavBar.name]: NavBar
  }
}
</script>

<style scoped>

</style>
