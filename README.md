#vue ssr项目
##说明
前台用vue,vue-router,axios
后台express
部署webpack,babel
index.js是后台的启动服务
app下面的server_entry.js是服务端的入口文件
app下面的client_entry.js是客户端的入口文件
webpack.config.js是客户端的webpack配置文件
webpack.server.config.js是客户端的webpack配置文件
本项目后台仅提供一个get的接口，返回一个json。localhost:8080/api/test.
本项目只是简单入门,具体可参照代码.如有错误,请大家相互指正。
##依赖
####前台
"vuex": "^3.0.1",
"vue": "^2.5.16",
"vue-router": "^3.0.1",
####后台
"express": "^4.16.3",
####部署环境
"webpack": "^4.16.0",
"webpack-cli": "^3.0.8",
"webpack-dev-server": "^3.1.4",
"webpack-node-externals": "^1.7.2"
"vue-loader": "^15.2.4",
"babel-core": "^6.26.3",
"babel-loader": "^7.1.5"

##遇到的问题
1.vue文件内的<style></style>webpack编译成功，但是启动后台服务的时候报错，window is no defined
解决:客户端先在vue-loader下添加属性extractCSS: true。在使用css-loader编译模块，(不用ExtractTextPlugin插件分离css，产生单独的css文件,
不用的话最后样式是内联进去。用的话要先下载extract-text-webpack-plugin@next，还需要在入口文件配置)
服务端使用externals: nodeExternals({ whitelist: /\.css$/})
2.后台启动后,js,cs等文件404，获取不到。
解决: 在index.js添加静态文件获取方法。

 










