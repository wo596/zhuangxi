<template>
   <div id="bianji">
     <div class="head">
        <span @click="close">
          <van-icon size="20" name="cross" />
        </span>
        <span>编辑内容</span>
        <span @click="afterRead">发布</span>
      </div>
     <div class="cont">
       <textarea class="weizi" placeholder="记录此刻的美好吧~" name="" id="" cols="30" rows="10" v-model="content">
       </textarea>
       <div class="cont-img">
         <van-uploader v-model="fileList" multiple :max-count="4">
<!--           <img class="img" :src="URL" alt="">-->
         </van-uploader>
       </div>
     </div>
   </div>
</template>

<script>
import { Icon, Uploader, Toast } from 'vant'
import 'vant/lib/icon/style'
import 'vant/lib/uploader/style'
import 'vant/lib/toast/style'
// 图片接口据
import axios from 'axios'
// 上传接口
import { getshangchuan } from '../api'

export default {
  name: 'bianji',
  data () {
    return {
      URL: '',
      content: '',
      fileList: []
    }
  },
  created () {
  },
  methods: {
    con () {
      if (this.content.length !== 0 && this.URL.length !== 0) {
        Toast.loading({
          message: '发布中。。。'
        })
        getshangchuan({
          content: this.content,
          image_url: this.URL
        }).then(() => {
          Toast.clear()
          window.location.href = 'quanzi.html'
        })
      } else if (this.content.length === 0) {
        Toast('请输入发布内容')
      } else {
        Toast('请输入发布图片')
      }
    },
    afterRead () {
      const params = new FormData()
      this.fileList.forEach(item => {
        params.append('userfile', item.file)
      })
      axios.post('http://47.96.78.105:8087/uploadMore', params).then((res) => {
        const good = res.data.data
        const url = good.imgid
        const str = url.split(',')
        for (var i = 0; i < str.length; i++) {
          if (str[i].length !== 0) {
            this.URL += ['http://47.96.78.105:8087/' + str[i] + '?w=300' + ',']
          }
        }
        if (this.URL.length > 0) {
          this.URL = this.URL.substr(0, this.URL.length - 1)
        }
        console.log(this.URL)
        this.con()
      })
    },
    close () {
      window.history.back()
    }
  },
  components: {
    [Icon.name]: Icon,
    [Uploader.name]: Uploader
  }
}
</script>

<style scoped>
  .head {
    width: 94%;
    margin: 4% 3%;
  }
  .head span {
    vertical-align: top;
    margin-right: 20px;
  }
  .head span:last-child {
    width: 50px;
    height: 22px;
    padding: 0 13px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.32);
    border-radius: 25px;
    float: right;
    background: #7fffaa;
  }
  .cont {
    width: 94%;
    height: 100%;
    margin: 3%;
  }
  .weizi {
    width: 100%;
    border: 0;
    margin: 0 ;
  }
  .van-icon__image {
    width: 100%;
    height: 3em;
  }
  .img {
    width: 80px;
    height: 80px;
  }
</style>
