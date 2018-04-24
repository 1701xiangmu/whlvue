import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
//引入组件
import  Cqhkindex from  "./page/CqhkIndex.vue";
//公共文件
import "./state/js/flexible.js";
import "./state/js/jquery-1.8.3.js";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {path:"/",component:Cqhkindex}
    ]
})

 new Vue({
     el:"#app",
     router,

     render: c=>{
        return  c(App)
     }
 })