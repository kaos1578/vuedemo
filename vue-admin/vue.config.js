const path = require('path');

module.exports = {
    //基本路径
    publicPath: process.env.NODE_env === 'production' ? '' : '/',
    //输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    //eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    //webpack配置，see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: (config) => {},
    configureWebpack: (config) => {
        // config.resolve = { //配置解析别名
        //     extensions: ['.js', '.json', 'vue'],
        //     alias: {
        //         '@': path.resolve(__dirname, './src'),
        //         'public': path.resolve(__dirname, './public'),
        //         'comoinents': path.resolve(__dirname, './src/comoinents'),
        //         'common': path.resolve(__dirname, './src/common'),
        //         'api': path.resolve(__dirname, './src/api'),
        //         'views': path.resolve(__dirname, './src/views'),
        //         'data': path.resolve(__dirname, './src/data'),
        //     }
        // }
    },
    //生产环境是否生产sourceMap文件
    productionSourceMap: false,
    //css相关配置
    css: {
        //是否使用css分离插件ExtractTextPlugin
        extract: true,
        //开启CSS source maps？
        sourceMap: false,
        //css预设器配置项
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        },
        //启用CSS modules for all css / pre-processor files.md
        modules: false
    },
    //use thread-loader for babel & TS in production build
    //ebavles by default if the machine has more thar 1 cores
    parallel: require('os').cpus().length > 1,
    //PWA 插件相关配置，see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    devServer: {
        open: false, //编译完成是否打开网页
        host: '0.0.0.0', //指定使用地址，默认localhost，0.0.0.0代表可以被外界访问
        port: 8080, //访问端口
        https: false, //编译失败时刷新页面
        hot: true, //开启热加载
        hotOnly: false,
        proxy: null, //设置代理
        overlay: { //全屏模式下是否显示脚本错误
            warnings: true,
            errors: true
        },
        before: app => {

        }
    },
    //第三方插件配置
    pluginOptions: {

    }
}