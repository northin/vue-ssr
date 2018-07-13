//后台node服务
var Vue = require("vue")
const express = require('express')
const server = require("express")()
const fs = require('fs')
const path = require('path')
const createRenderer = require('vue-server-renderer').createRenderer
const { createBundleRenderer } = require('vue-server-renderer')
const serverManifest = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
// import app from 
// const app = require("./app/server_entry.js")
const resolve = file => path.resolve(__dirname, file)
const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache  ? 1000 * 60 * 60 * 24 * 30 : 0
})
server.use('/dist', serve('./dist', true))

server.post('/api/test', function (req, res) {
    console.log(req)
    res.send('Got a POST request');
  });
server.get('/api/test', function (req, res) {
    // console.log(req)
    res.json({'title':'testsetstststst'});
});
server.get("*",(req,res) => {
    // const app = new Vue({
    //     data:{
    //         url:req.url
    //     },
    //     template:`<div>访问的 URL 是1111： {{ url }}</div>`
    // })

    // const renderer = createRenderer({
    //     template: fs.readFileSync('./index.template.html', 'utf-8')
    // })
    const renderer = createBundleRenderer(serverManifest, {
        runInNewContext: false, 
        template: fs.readFileSync('./index.template.html', 'utf-8'), 
        clientManifest:clientManifest,
        basedir: resolve('./dist'),
    })
    const context = {
        title: 'Vue HN 2.0', // default title
        url: req.url
      }
    renderer.renderToString(context,(err,html) => {
        if (err) {
                console.log(err)
                res.status(500).end('Internal Server Error')
            // }
        } else {
            res.end(html)
        }
    })
})

console.log("listen at 8080")
server.listen(8080)
















