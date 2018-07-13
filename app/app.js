import Vue from 'vue'
import App from "./App.vue"
import createRouter from "./router.js"
import { createStore } from './store.js'
import { sync } from 'vuex-router-sync'

export  function createServerApp (){
    const router = createRouter()
    const store = createStore()

    // 同步路由状态(route state)到 store
    sync(store, router)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app,router,store}
}
// export  function createClientApp (){
//     return new Vue({
//         el: '#app',
//         // router,
//         // store,
//         template: '<App/>',
//         components: { App }
//     })
// }

