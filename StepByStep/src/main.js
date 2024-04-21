import { createApp } from 'vue'
import './style.css'
import App from './Basic.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
createApp(App).use(ElementPlus).mount('#app')
