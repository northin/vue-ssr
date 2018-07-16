# ssr
    ssr是服务端渲染。即在node后台将组件渲染成HTML，发送给浏览器。
## 优点：
	1.更好的SEO，搜索引擎可以直接查看渲染好的页面
	
    2.更加快的内容到达时间，后台渲染好了，浏览器收的快

## 缺点：
	1.后台的必须有node的服务

	2.服务器压力大


### 过程
    1.试一下

![](https://github.com/northin/vue-ssr/blob/master/img/1.png)
    
    结果
![](D:\web\vue\ssr\img\2.png)

    2.开始服务端渲染
#### 依赖
##### 前台
"vuex": "^3.0.1",
"vue": "^2.5.16",
"vue-router": "^3.0.1",
##### 后台
"express": "^4.16.3",
##### 部署环境
"webpack": "^4.16.0",
"webpack-cli": "^3.0.8",
"webpack-dev-server": "^3.1.4",
"webpack-node-externals": "^1.7.2"
"vue-loader": "^15.2.4",
"babel-core": "^6.26.3",
"babel-loader": "^7.1.5"

    项目结构
![](D:\web\vue\ssr\img\mulu.png)
    
    说明：
- app的是vue项目
   - client_entry.js是客户端入口
   - server_entry.js是服务端入口
   - app.js是生成vue对象的工厂函数
- index.js的node后台服务启动
- index.template.html是后台用到的模板
- webpack.config.js是生成生成客户端构建清单(client build manifest) 的配置
- webpack.server.config.js是生成server bundle 的配置
- .babelrc是babel的配置
    
    3.步骤

![](D:\web\vue\ssr\img\guocheng.png)

- App.vue

    包含一个id为app的div（用来挂载在vNode）
- app.js 

```
export default function createApp(){
    return new Vue({
        store,
        router,
        //js渲染模板 h是createElement函数
        render:h => h(App)
    })		
}
```

- store.js是vuex的store初始化，就一个test方法
- api.js是axios的接口api的
- router.js是路由说明的
- componment是组件   
- client_entry.js

![](D:\web\vue\ssr\img\client1.png)

![](D:\web\vue\ssr\img\client2.png)

- server_entry.js

![](D:\web\vue\ssr\img\server.png)

    组件内调用：

```
asyncData ({ store, route }){ //触发函数
    return store.dispatch("test",1)
},
```


    css管理：
	在webpack的配置中vue-loader加

```
options: {
    // enable CSS extraction
    extractCSS: true
}
```

	添加css-loader

```
{ 
    test: /\.css$/, 
    use: ['vue-style-loader', 'css-loader']
}
```

    后台服务：
	    index.js

![](D:\web\vue\ssr\img\node.png)

## 后记：

	只是简单入门项目，运用起来应该还有很多地方有坑。只是根据官网https://ssr.vuejs.org/zh/实现了基本Dom，路由，异步数据加载（基于axios，vuex）这	些功能。


### 遇到的问题
1.vue文件内的<style></style>webpack编译成功，但是启动后台服务的时候报错，window is no defined
解决:客户端先在vue-loader下添加属性extractCSS: true。在使用css-loader编译模块，(不用ExtractTextPlugin插件分离css，产生单独的css文件,
不用的话最后样式是内联进去。用的话要先下载extract-text-webpack-plugin@next，还需要在入口文件配置)
服务端使用externals: nodeExternals({ whitelist: /\.css$/})

2.后台启动后,js,cs等文件404，获取不到。
解决: 在index.js添加静态文件获取方法。

### 参考：

vuessr官网：[https://ssr.vuejs.org/zh/](https://ssr.vuejs.org/zh/ "https://ssr.vuejs.org/zh/")    
vuessr官网实例：[https://github.com/vuejs/vue-hackernews-2.0/](https://github.com/vuejs/vue-hackernews-2.0/ "https://github.com/vuejs/vue-hackernews-2.0/")     
### 链接：

nuxt官网：[https://zh.nuxtjs.org/](https://zh.nuxtjs.org/ "https://zh.nuxtjs.org/")    
next官网：[https://nextjs.org/   ](https://nextjs.org/ "https://nextjs.org/")  
         