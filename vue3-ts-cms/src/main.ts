import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import App from './App.vue'
// 引入Element Plus模块
import ElementPlus from 'element-plus'
// 引入CSS样式
import 'element-plus/dist/index.css'
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/css/index.less'

const app = createApp(App)

// 作用：将一个包含多个组件的对象中的所有组件，在Vue应用中进行全局注册，使得这些组件可以在应用的任意位置使用

// Object.entries() 是一个JavaScript内置方法，它用于返回一个给定对象自身所有可枚举属性的键值对数组。
// let obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj));
// 输出: [['foo', 'bar'], ['baz', 42]]


// 遍历ElementPlusIconsVue中的所有组件进行祖册
// Object.entries(ElementPlusIconsVue)将ElementPlusIconsVue对象转换为一个由键值对组成的数组
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // 向应用实例中全局注册图标组件
  // 调用Vue应用实例的component方法，将当前组件对象注册为一个全局组件，可以在应用的任何地方直接使用。
  // key作为组件的名称，component为组件的定义对象
  app.component(key, component)
}


app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')

