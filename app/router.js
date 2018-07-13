import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

export default function createRouter(){
    return new Router({
        mode: 'history',
        routes:[
            { path: '/top', component:() => import('./componment/top.vue') },
            { path: '/new', component: () => import('./componment/new.vue')  },
        ]
    })
}