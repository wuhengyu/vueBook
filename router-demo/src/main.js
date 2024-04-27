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
  { path: '/DemoOne', component: DemoOne },
  { path: '/DemoTwo', component: DemoTwo },
  { name: 'user', path: '/User/:username', component:User,
  children:
  [
    {
      path: 'friends/:count',
      component: FriendsDemo
    }
  ]},
  { path: '/User/:id(\\d+)', component:UserSetting },
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
  { path: '/d', redirect: to => {
    console.log(to) // to是路由对象
    // 随机数模拟登录状态
    let login = Math.random() > 0.5
    if (login) {
      return { path:'/demo1'}
    } else {
      return { path:'/demo2'}
    }
  }
 },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

export default router;