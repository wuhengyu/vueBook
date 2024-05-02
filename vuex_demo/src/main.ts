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
        }
    },
    // 定义修改状态的方法
    mutations: {
        increment(state:{ count: number }, n) {
            state.count += n
        }
    },
        
    getters: {
        countText (state) {
            // return state.count + "次"
            return (s: string) => {
                return state.count + s
            }
        }
    },
    // actions: {
    //     increment(context, n) {
    //         context.commit('increment', n)
    //     }
    // }
    // 模拟异步获取数据
    actions: {
        asyncIncrement(context, n) {
            setTimeout(() => {
                context.commit('increment', n)
            }, 200);
        }
    }
})
// 注入Vuex的store
app.use(store)
// 挂载应用
app.mount('#app')