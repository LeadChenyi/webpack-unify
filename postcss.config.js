module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                "defaults",
                "Android 4.1",
                "iOS 7.1",
                "Chrome>31",
                "ff>31",
                "ie>=8",
                "last 2 versions",
                ">0%"
            ]
        },
        'postcss-pxtorem': {
            rootValue({ file }) {
                // vant组件库是基于375px，其余基于750设计尺寸换算
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            propList: ['font-size', 'line-height', 'letter-spacing', 'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height'],
            selectorBlackList: [/pc/],                  // 忽略某个类，除了pc这个类其余的都不进行转换：pc-xxx
            exclude: /\/src\/assets\/style\/pc/i        // 忽略某个目录下的所有文件
        }
    }
};