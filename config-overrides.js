const {override, fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        /* 原本是style : 'css'，
           * 改为 style : true。注意这里的 true 没有单引号！
           * 注意这里的 true 没有单引号！
           * 注意这里的 true 没有单引号！
           *  */
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@brand-primary": "#1cae82", //正常
            "@brand-primary-tap": "#1DA57A"   //按下
        }
    }),
);