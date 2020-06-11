<template>
   <div class="star">
     <van-rate allow-half v-model="star" readonly :size="size" />
   </div>
</template>

<script>
import { Rate } from 'vant'
import 'vant/lib/rate/style'
export default {
  name: 'star',
  props: {
    star: {
      type: Number
    },
    size: {
      type: String
    }
  },
  components: {
    [Rate.name]: Rate
  }
}
</script>

<style scoped>

</style>
