<template>
<nav>
  <router-link to="/DemoOne">页面1</router-link> |
  <router-link to="/DemoTwo">页面2</router-link> |
  <router-link to="/User/吴恒宇">用户中心</router-link> |
  <router-link to="/User/吴恒宇/friends/888">子路由</router-link> |
  <router-link to="/User/001">用户编号</router-link> | 
  <router-link to="/category/222/333/444">用户类别</router-link> | 
  <router-link to="/home/张三/1234567890">路由视图</router-link> | 
  <router-link to="/chongdingxiang1">重定向1</router-link> | 
  <router-link to="/chongdingxiang2">重定向2</router-link> | 
  <router-link to="/login">登录重定向</router-link> | 
  <router-link to="/s/12345">别名1</router-link> | 
  <router-link to="/setting/12345678">别名2</router-link> | 
  <router-link :to="{ name: 'user', params: { username: '小王' }}">router-link路由切换</router-link>
</nav>

<p>
  <el-button type="primary" @click="toUser1">router.push1</el-button>
  <el-button type="primary" @click="toUser2">router.push2</el-button>
  <el-button type="primary" @click="toUser3">router.push3</el-button>
  <el-button type="primary" @click="toUser4">router.push4</el-button>
</p>

<el-container>
    <el-header height="80px">
      <router-view name="topBar"></router-view>
    </el-header>
    <el-main>
      <router-view name="main"></router-view>
    </el-main>
    <el-footer height="80px">
      <!-- 没有命名时，渲染默认组件 -->
      <router-view></router-view>
    </el-footer>
  </el-container>

<!-- <router-view></router-view> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  name: 'App',
  components: {
    
  },
  methods:{
    toUser1() {
      this.$router.push({
        path:"/user/小王",
        // 默认行为：该路由将被添加到路由历史记录中, 用户可以通过浏览器的后退按钮返回到前一个页面
        // 当使用replace:true选项时，每次导航到新的路由时，当前路由历史记录中的最后一条记录将被替换。这样，用户无法通过浏览器的后退按钮返回到前一个页面。
        // 作用：例如在用户进行身份验证或提交表单后，将用户重定向到新页面，而不希望他们返回到之前的表单页
        // replace:true
      })
    },
    toUser2() {
      this.$router.push({
        path:"/user/小王/friends/6666"
      })
    },
    toUser3() {
      // 选择性跳转导航栈中某个位置
      // 跳转前一个记录
      this.$router.go(-1)
      // 跳转后一个记录
      // this.$router.go(1)
    },
  // 路由命名，根据路由名称切换
    toUser4() {
      this.$router.push({
        name:"user",
        params:{
          username:"zhangsan"
        }
      })
    },

  }
}
</script>
