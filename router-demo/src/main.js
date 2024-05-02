import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router' 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DemoOne from './components/DemoOne.vue'
import DemoTwo from './components/DemoTwo.vue'
import HomePage from './components/HomePage.vue'
import User from './components/UserDemo.vue'
import UserSetting from './components/UserSetting.vue'
import CategoryDemo from './components/CategoryDemo.vue'
import FriendsDemo from './components/FriendsDemo.vue'


const routes = [
  // name用于程序内部导航和逻辑引用
  { path: '/DemoOne', component: DemoOne, name: 'DemoOne' },
  // 对指定路由注册导航守卫
  { path: '/DemoTwo', component: DemoTwo, name: 'DemoTwo', beforeEnter: (router) => {
    console.log('指定路由注册导航守卫')
    console.log(router)
    return true
  }},
  // 重定向1
  { path: '/chongdingxiang1', redirect: '/DemoOne' },
  // 重定向2
  { path: '/chongdingxiang2', redirect: {name: 'DemoTwo' } },
  { name: 'user', path: '/User/:username', component:User,
  children:
  [
    {
      path: 'friends/:count',
      component: FriendsDemo
    }
  ]},
  { path: '/User/:id(\\d+)', component:UserSetting, name: 'setting' },
  // 别名，允许用户通过多个URL路径访问同一个路由
  { path: '/User/:id(\\d+)', component:UserSetting, alias: ['/setting/:id', '/s/:id']},
  { path: '/category/:cat*', component:CategoryDemo},
  { path: '/:pathMatch(.*)*', component: HomePage },
  { path: '/', component: HomePage },
  // components设置为一组对象，键表示路由视图的名称，值为要渲染的组件
  // router-view name="topBar", 没有命名的时候，默认分配default
  {
    path: '/home/:username/:id', 
    components: {
      topBar: User,
      main: UserSetting,
      default:DemoOne
    }
  },
  { path: '/login', redirect: to => {
    console.log(to) // to是路由对象
    // 随机数模拟登录状态
    let login = Math.random() > 0.5
    if (login) {
      return { path:'/DemoOne'}
    } else {
      return { path:'/DemoTwo'}
    }
  }
 },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

// to表示即将跳转到的路由对象，from表示当前的路由对象
// 全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log('全局前置守卫')
//   console.log(to)
//   console.log(from)
  // 避免死循环
  // if (to.name!='setting'){
    // return 停止当前导航并返回一个路由目标
    // 导航守卫函数中，当使用 return 返回一个值时，不应该再调用 next 函数
    // return {name:'setting',params:{id:'666'}}

    // 重定向导航, 将导航重定向到指定的路径
  //   next({name:'setting',params:{id:'666'}})
  // }
  // else {
    // 重定向到根路径后,Vue Router 会再次执行导航守卫,导致进入 if 条件语句,从而又会重定向回 'setting' 路由,这就形成了一个无限循环。
    // next('/');
    // 允许导航继续，并进入下一个导航守卫或目标路由
  //   next();
  // }


  // if (to.name!='setting'){
  //   next({name:'setting',params:{id:'666'}})
  // }
  // else {
  //   next();
  // }

  // 允许导航继续
  // next();
  // 是否允许此次跳转
//   return true
// })

// 全局前置守卫
// router.beforeEach((to, from) => {
//   console.log('全局前置守卫')
//   console.log(to)
//   console.log(from)
//   return true
// })

// // 全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log('Global beforeEach')
//   // 在这里可以进行权限验证或其他操作

//   // 继续导航
//   next()
// })

// 全局解析守卫
// router.beforeResolve((to, from, next) => {
//   console.log('Global beforeResolve')
//   // 在这里可以处理异步数据获取等操作

//   // 继续导航
//   next()
// })

// // 全局后置钩子
// router.afterEach((to, from) => {
//   console.log('Global afterEach')
//   // 在这里可以处理滚动恢复等操作
// })

// 全局后置守卫
// router.afterEach((to, from) => {
//   console.log('全局后置守卫')
//   console.log(to)
//   console.log(from)
// })
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

export default router;