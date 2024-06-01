import { createStore } from 'vuex'

// 使用Vuex库创建一个集中式状态管理容器，以便在Vue.js应用中管理共享状态，如用户登录信息。
const Store = createStore({
    state () {
        return {
            // 定义了Vuex中的初始状态数据，包含两个属性
            userName:"",
            userPassword:"",
        }
    },
    // 定义了一个获取器isLogin，它根据state.userName的长度判断用户是否登录（即用户名字段是否非空）
    // 这个获取器可以被组件用来检查用户登录状态，而无需直接访问状态本身。
    getters: {
        isLogin: (state) => {
            return state.userName.length > 0
        }
    },
    // 突变是用来改变状态的唯一方法，并且必须是同步函数。
    mutations: {
        // clearUserInfo 清除用户的用户名和密码信息。
        clearUserInfo(state) {
            state.userName = "";
            state.userPassword = "";
        },
        // registUserInfo 接收一个对象参数，用以设置用户名和密码到状态中。
        registUserInfo(state,{name, password}) {
            state.userName = name;
            state.userPassword = password;
        }
    }
})
// 将创建的Store实例作为默认导出，使得其他模块可以通过导入此文件来访问和使用Vuex存储
export default Store;