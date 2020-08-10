module.exports = {
    publicPath: './',
    devServer: { //这部分与下面的自动编译配置有关,此处一起写入
        open: true, //项目启动自动打开浏览器
        port: 8880, //自定义端口号
        // contentBase: 'src',//定向到首页,即默认打开就是index.html,不设置这个打开还要手点src
        // hot: true, //开启热部署,即局部刷新,这样每次编译系统开销更小
    },
    configureWebpack: {
        resolve: {
            alias: {  // 别名
                vue$: "vue/dist/vue.esm.js",
            }
        }
    },
}