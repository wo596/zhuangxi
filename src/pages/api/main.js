import axios from 'axios'
import { Dialog } from 'vant'
import 'vant/lib/dialog/style'

const ERR_OK = 200
export function get (url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const data = res.data.data
      const errno = res.data.code
      console.log(data)
      if (errno === ERR_OK) {
        return data
      } else {
        Dialog.alert({
          message: '没有数据，请稍后重试'
        })
      }
    })
  }
}
