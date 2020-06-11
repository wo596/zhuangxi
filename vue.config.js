module.exports = {
  publicPath: './',
  pages: {
    page1: {
      // 入口文件
      entry: 'src/pages/page1/main.js',
      // 应用模板
      template: 'src/pages/page1/index.html',
      // dist输出的文件名
      filename: 'index.html'
    },
    page2: {
      // 入口文件
      entry: 'src/pages/page2/main.js',
      // 应用模板
      template: 'src/pages/page2/finish.html',
      // dist输出的文件名
      filename: 'finish.html'
    },
    page3: {
      // 主页面的子页面
      entry: 'src/pages/page3/main.js',
      template: 'src/pages/page3/house.html',
      filename: 'house.html'
    },
    page4: {
      // 圈子页面
      entry: 'src/pages/page4/main.js',
      template: 'src/pages/page4/quanzi.html',
      filename: 'quanzi.html'
    },
    page5: {
      // 圈子页面
      entry: 'src/pages/page5/main.js',
      template: 'src/pages/page5/bianji.html',
      filename: 'bianji.html'
    },
    page6: {
      // 圈子页面
      entry: 'src/pages/page6/main.js',
      template: 'src/pages/page6/user.html',
      filename: 'user.html'
    },
    page8: {
      // 地址页面
      entry: 'src/pages/page8/main.js',
      template: 'src/pages/page8/xiangqing.html',
      filename: 'xiangqing.html'
    }
  }
}
