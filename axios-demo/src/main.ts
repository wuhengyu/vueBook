import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 注册Element
app.use(ElementPlus)
// 注册axios
app.use(VueAxios, axios)

// 注册Element Plus图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // 向应用实例中全局注册图标组件
  app.component(key, component)
}
app.use(store).use(router).mount('#app')
