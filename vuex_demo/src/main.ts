import { createApp } from 'vue'
import App from './App.vue'
// 引入 createStore方法
import { createStore } from 'vuex'
// 创建应用实例
const app = createApp(App)


const store = createStore({
    // 定义要共享的状态数据
    state() {
        return {
            count:0,
            countText:0
        }
    },
    // 定义修改状态的方法
    mutations: {
        increment(state:{ count: number }) {
            state.count ++
        }
    },
    // :{ count: number }
    getters: {
        countText (state) {
            return state.count + "次"
        }
    }
})
// 注入Vuex的store
app.use(store)
// 挂载应用
app.mount('#app')