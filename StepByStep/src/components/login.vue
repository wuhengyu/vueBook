<template>
  <el-form :model="form" label-width="120px">
    <div>
      <h1>{{ userInfo.title }}</h1>

      <div v-if="!userInfo.loggedIn">
        <el-form-item label="账号：">
          <el-input
            type="text"
            placeholder="请输入用户名"
            v-model="userInfo.username"
          />
        </el-form-item>
      </div>
      <div v-if="!userInfo.loggedIn">
        <el-form-item label="密码：">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="userInfo.password"
          />
        </el-form-item>
      </div>
      <div>
        <el-button @click="login" v-if="!userInfo.loggedIn">登录</el-button>
      </div>
      <div>
        <el-button @click="logout" v-if="userInfo.loggedIn">退出登录</el-button>
      </div>
    </div>
  </el-form>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const form = reactive({
      name: "",
    });
    const userInfo = reactive({
      title: "未登录",
      logintitle: "欢迎你：",
      username: "admin",
      password: "123456",
      loggedIn: false,
    });
    return {
      userInfo,
      login,
      form,
      logout,
    };
    // 使用setup函数中定义的函数通常用于处理组件的逻辑，以及为模板提供所需的数据和方法。这种方式更适合Vue 3中基于函数的组件开发方式，并且可以更方便地操作响应式数据以及进行逻辑的组织。
    function login() {
      if (userInfo.username === "admin" && userInfo.password === "123456") {
        alert("登录成功");
        userInfo.title = userInfo.logintitle + userInfo.username;
        userInfo.loggedIn = true;
      } else {
        alert("用户名或密码错误");
      }
    }
    function logout() {
      alert("退出登录成功");
      userInfo.title = userInfo.title;
      userInfo.loggedIn = false;
    }
  },
  // 使用methods选项来定义组件的方法，这样做是为了让方法被模板中的事件处理器调用。这种方式更适合常规的Vue 2风格的组件开发，也可以方便直观地将方法和数据相关联。
  // methods: {
  //   login() {
  //     alert("登录成功");
  //     this.userInfo.title = this.userInfo.logintitle + this.userInfo.username;
  //     this.userInfo.loggedIn = false;
  //   },
  // },
});
</script>

<!-- 需要将方法直接绑定到模板中的事件处理器，使用methods更为合适；如果您更倾向于基于函数的组件开发，可以使用setup来组织和处理逻辑。 -->
<style lang="scss" scoped>
</style>