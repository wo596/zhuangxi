<template>
  <div id="user">
    <u-header cen="个人资料"></u-header>
    <van-cell title="头像" is-link><!-- 使用 title 插槽来自定义标题 -->
      <template #right-icon>
        <span class="cont-r_l">
          <van-uploader
            :after-read="afterRead"
            :upload-icon="URL"
            image-fit="round"
            :max-count="1"
            class="user-t"
            preview-size="40px">
            <van-image
              ref="goodsImg"
              width="40px"
              height="40px"
              round
              :src="URL"
            ></van-image>
          </van-uploader>
        </span>
      </template></van-cell>
    <van-cell title="昵称" is-link>
      <input type="text" v-model="text" style="text-align:right;">
    </van-cell>
    <van-cell title="性别" v-model="sext" @click="showsex" is-link></van-cell>
    <van-popup v-model="sex" :style="{ width: '200px', height: '100px' }">
      <div>请选择性别：</div>
      <van-radio-group  v-model="radio">
        <van-radio name="1">男</van-radio>
        <van-radio name="2">女</van-radio>
      </van-radio-group>
      <div class="sexb">
        <span @click="butt">确定</span>
        <span @click="buttn">取消</span>
      </div>
    </van-popup>
    <van-cell v-model="carmodel" title="地址" @click="showPopup" is-link></van-cell>
    <van-popup round v-model="show" position="bottom" :style="{ height: '39%' }">
      <van-area
        title="地址"
        :area-list="areaList"
        value="110000"
        @change="onChange"
        @confirm="yes"></van-area>
    </van-popup>
    <van-cell v-model="chostime" title="生日" is-link @click="showshengri"></van-cell>
    <van-popup round v-model="hide" position="bottom" :style="{height: '39%'}">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirm"
      />
    </van-popup>
    <van-button class="but" type="primary" round size="large">上传</van-button>
  </div>
</template>

<script>
import UHeader from '../../components/back/back'
import axios from 'axios'
import { Area, Popup, Cell, Uploader, Image, Dialog, Button, DatetimePicker, RadioGroup, Radio } from 'vant'
import 'vant/lib/button/index.css'
import 'vant/lib/datetime-picker/style'
import 'vant/lib/cell/index.css'
import 'vant/lib/image/index.css'
import 'vant/lib/uploader/style'
import 'vant/lib/area/style'
import 'vant/lib/popup/style'
import 'vant/lib/radio-group/style'
import 'vant/lib/radio/style'
import address from '../arre/area'
export default {
  name: 'user',
  data () {
    return {
      carmodel: '请选择',
      // 时间
      chostime: '请选择',
      URL: '',
      // 昵称
      text: '',
      show: false,
      hide: false,
      // 地址
      // con: '',
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
      // 日期
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2021, 10, 1),
      currentDate: new Date(),
      // 性别
      sex: false,
      sext: '男',
      radio: '1'
    }
  },
  created () {
    this.areaList.province_list = address.province_list
    this.areaList.city_list = address.city_list
    this.areaList.county_list = address.county_list
  },
  methods: {
    afterRead (file) {
      this.$refs.goodsImg.src = file.content
      const params = new FormData()
      params.append('userfile', file.file)
      // const userfile = file.content
      axios.post('http://47.96.78.105:8087', params).then((res) => {
        const good = res.data.data
        const url = good.imgid
        this.URL = 'http://47.96.78.105:8087/' + url + '?w=300'
      }).then(() => {
        Dialog.alert({
          message: '图片上传成功'
        })
      })
    },
    onChange (picker, value, index) {
      let areaName = ''
      for (var i = 0; i < value.length; i++) {
        areaName = areaName + value[i].name + ' '
      }
      this.con = areaName
    },
    // 时间格式
    timeFormat (time) { // 时间格式化 2019-09-08
      const year = time.getFullYear()
      const month = time.getMonth() + 1
      const day = time.getDate()
      return year + '年' + month + '月' + day + '日'
    },
    yes () {
      this.carmodel = this.con
      this.show = false
    },
    showPopup () {
      this.show = true
    },
    showshengri () {
      this.hide = true
    },
    // 性别
    showsex () {
      this.sex = true
    },
    butt () {
      if (this.radio === '1') {
        this.sext = '男'
      } else {
        this.sext = '女'
      }
      this.sex = false
    },
    buttn () {
      this.sex = false
    },
    // 日期拼接
    confirm (value) {
      this.chostime = this.timeFormat(value)
      this.hide = false
    }
  },
  components: {
    UHeader,
    [Area.name]: Area,
    [DatetimePicker.name]: DatetimePicker,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [Popup.name]: Popup,
    [Image.name]: Image,
    [Uploader.name]: Uploader,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio
  }
}
</script>

<style scoped>
  .but {
    width: 80%;
    margin: 30px 10%;
  }
  .van-popup {
    padding: 3px;
  }
  .van-radio-group {
    margin: 10px 0 10px 10px;
  }
  .van-radio-group > div {
  }
  .sexb span {
    float: right;
    margin-left: 20px;
  }
  input {
    border: 0;
    margin-right: 20px;
    padding-right: 20px;;
  }
</style>
