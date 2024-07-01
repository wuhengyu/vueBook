import { createStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import type { IRootState } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy', // 测试
      age: 18 // 测试
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
setupStore() // 初始化 store
export default store
