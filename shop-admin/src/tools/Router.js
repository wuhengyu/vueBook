import { createRouter, createWebHashHistory } from 'vue-router'
import Store from '../tools/Storage'
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
import Order from '../components/order/Order.vue'
import Goods from '../components/goods/Goods.vue'
import AddGood from '../components/goods/AddGood.vue'
import GoodCategory from '../components/goods/GoodCategory.vue'
import ManagerList from '../components/manager/ManagerList.vue'
import ManagerReqList from '../components/manager/ManagerReqList.vue'
import ManagerOrder from '../components/manager/ManagerOrder.vue'
import TradeInfo from '../components/financial/TradeInfo.vue'
import TradeList from '../components/financial/TradeList.vue'
import DataCom from '../components/financial/DataCom.vue'

const Router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/login',
            component:Login,
            name:"login"
        },
        {
            path:'/home',
            component:Home,
            name:"home",
            children:[
                {
                    path:'order/:type',// 0是普通订单 1是秒杀订单,
                    component:Order,
                    name:"Order"
                },
                {
                    path:'goods/:type',// 0是普通商品 1是秒杀商品 2是今日推荐,
                    component:Goods,
                    name:"Goods"
                },
                {
                    path:'addGood/:type',// 0是普通商品 1是秒杀商品 2是今日推荐,
                    component:AddGood,
                    name:"AddGood"
                },
                {
                    path:'category',
                    component:GoodCategory,
                    name:'GoodCategory'
                },
                {
                    path:'ownerlist',
                    component:ManagerList,
                    name:'ManagerList'

                },
                {
                    path:'ownerreq',
                    component:ManagerReqList,
                    name:'ManagerReqList'

                },
                {
                    path:'ownerorder',
                    component:ManagerOrder,
                    name:'ManagerOrder'
                },
                {
                    path:'tradeinfo',
                    component:TradeInfo,
                    name:'TradeInfo'
                },
                {
                    path:'tradelist',
                    component:TradeList,
                    name:'TradeList'
                },
                {
                    path:'data',
                    component:DataCom,
                    name:'DataCom'
                }
            ],
            redirect:'/home/order/0'
        }
    ]
})

// 前置路由卫士
// 每次路由变化之前执行一些检查或操作
// 确保只有已登录的用户才能访问特定的页面，未登录用户会被引导到登录页面。
Router.beforeEach((from) => {
    let isLogin = Store.getters.isLogin;
    // 用户未登录且不是从登录页跳转，函数返回一个路由对象，其name属性设置为'login'。这意味着路由器会被重定向到登录页面
    if (isLogin || from.name == 'login') {
        return true;
    } else {
        return {name: 'login'}
    }
    
})

export default Router;