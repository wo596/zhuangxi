<template>
  <div id="finish">
    <f-mcont :list="list"></f-mcont>
  </div>
</template>

<script>
import FMcont from './Mcont'
import { getlist } from '../api'

export default {
  name: 'finish',
  data () {
    return {
      list: []
    }
  },
  created () {
    getlist().then((res) => {
      this.list = res
    })
  },
  components: {
    FMcont
  }
}
</script>

<style scoped>

</style>
