nodejs通过babel体验es6模块化--
    npm install -save-dev @babel/core @babel/cli @babel/preset-env @babel/node
    npm install -save @babel/polyfill
    项目根目录创建babel.config.js 并初始化代码如下:
                                            const presets = [
                                                ["@babel/env",{
                                                    targets:{
                                                        edge:'17',
                                                        firefox:'60',
                                                        chrome:'67',
                                                        safari:'11.1'
                                                    }
                                                }]
                                            ];
                                            module.exports = {presets};

    通过 npx babel-node xx.js 执行代码

Webpack--
新建项目目录，并在目录下初始化包管理配置文件package.json:npm init -y
新建 src 源代码目录 src -> index.html
安装jquery : npm install jquery -s         (-s安装发布到生产环境dependencies ,-d安装到devDependencies开发环境)
    npm install webpack webpack-cli -D
    创建webpack.config.js的配置文件，并初始化以下基本配置:
                                                module.exports={
                                                    mode:'development' //mode用来指定构建模式  development production
                                                }
    在package.json配置文件的scripts节点下，新增dev脚本:
                                                "scripts"{
                                                    "dev": "webpack-dev-server --open chrome --host 127.0.0.1 --port 8888"
                                                },
        （npm run dev 打包启动项目）
    配置自动打包功能:
        npm i webpack-dev-server -D
        package.json -> "scripts"-> "dev":"webpack-dev-server"
        启动自动打包，js文件就变虚拟,index.html中引用js改为'/xx.js'
        npm run dev
        http://localhost:8080查看自动打包效果
        》更改预览页面:
                        npm install html-webpack-plugin
                        webpack.config.js ->
                                            const path = require('path') //导入node.js中专门操作路径的模块
                                            const HtmlWebpackPlugin = require('html-webpack-plugin')
                                            const htmlPlugin = new HtmlWebpackPlugin({
                                                template:'./src/index.html',
                                                filename:'index.html'
                                            })
                                            module.exports = {
                                                plugins:[htmlPlugin]
                                                }
            完成
loader加载器--
    打包css样式: npm i style-loader css-loader -d
    打包less样式:npm i less-loader less -d
    打包scss样式:npm i sass-loader node-sass -d
    打包样式表中的图片和文字: npm i url-loader file-loader -D
    自动加入兼容前缀:npm i postcss-loader autoprefixer -d
                    项目中创建postcss.config.js
                    初始化配置:->
                                const autoprefixer = require('autoprefixer') //导入自动添加前缀的插件
                                module.exports = {
                                     plugins:[autoprefixer] //挂载插件
                                }
    打包处理js文件中的高级语法:
                            npm i babel-loader @babel/core @babel/runtime -D
                            npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
                        项目中创建babel配置文件babel.config.js,并初始化 ->:
                                                    module.exports ={
                                                        presets:['@babel/preset-env'],
                                                        plugins:['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
                                                    }
                        在webpack.config.js > module ->rules数组中，添加loader规则:
                                                                    {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
                                                                    //exclude排除node_modules中的js文件
    安装vue组件的加载器:
                        npm i vue-loader vue-template-compiler -D
                    在webpack.config.js配置文件中，添加vue-loader的配置->
                                                                    const VueLoaderPlugin = require('vue-loader/lib/plugin')

                                                                    plugins:[
                                                                        new VueLoaderPlugin()
                                                                    ]
                                                                    还有rules中添加规则：{test:/\.vue$/,loader:'vue-loader'}
在webpack项目中使用Vue:
                       1. npm i vue -s
                       2. src->index.js中 import vue from 'vue'  导入vue构造函数
                       3. 创建vue实例对象，并指定要控制的el区域
                       4. 通过 render 函数渲染app根组件
                       代码如下:
                            src>index.js ->:
                                            //导入Vue构造函数
                                            import Vue from 'vue'
                                            //导入根组件
                                            import app from './components/app.vue'
                                            const vm = new Vue({
                                            //指定vm实例要控制的页面区域
                                            el:'#app',
                                            //通过render函数，把指定的组件渲染到el区域中
                                            render: h => h(app)
                                            })    

                            index.html ->  
                                        <!-- 要被vue组件控制的区域 -->
                                        <div id="app"></div>                 
webpack打包发布:
                //在package.json文件中配置webpack打包命令
                //该命令默认加载项目根目录中的webpack.config.js配置文件       
                //在scripts中添加打包命令： "build":"webpack -p",                                 