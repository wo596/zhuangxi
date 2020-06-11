import { get } from './main'
const url = 'http://47.96.78.105:8086'

// 首页数据
const pathhome = url + '/getZxHomeList'
const gethome = get(pathhome)

// 首页点进去的页面 house
const pathZxshowDetail = url + '/getZxshowDetail'
const getdetail = get(pathZxshowDetail)

// 装修公司列表 finish
const pathlist = url + '/getZxComList'
const getlist = get(pathlist)

// 装修公司点击详情 xiangqing.html
const pathlistdatil = url + '/getZxComDetail'
const getListdatil = get(pathlistdatil)

// 圈子 动态
const pathquanzi = url + '/getZxcirlceList'
const getquanzi = get(pathquanzi)

// 上传内容 bianji.html
const pathbianji = url + '/publishZxcircle?uid=13'
const getshangchuan = get(pathbianji)
export {
  gethome,
  getdetail,
  getlist,
  getListdatil,
  getquanzi,
  getshangchuan
}
