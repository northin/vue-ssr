import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


import Api from "./api.js"

export  function createStore(){
    return new Vuex.Store({
        state:{
            items:{}
        },
        actions:{
            test({commit}, id){
                return Api.test(id).then(item => {
                    console.log(item)
                    commit("setItem",{id,item:item.data})
                })
            }
        },
        mutations:{
            setItem(state,{id,item}){
                console.log(id,item)
                Vue.set(state.items, id, item)
            }
        }
    })
}















