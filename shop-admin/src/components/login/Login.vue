<!-- eslint-disable vue/multi-word-component-names -->
<!-- <template>
  <div>
    登录页面{{ msg }}
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to Your Login'
    }
  }
}
</script> -->


<template>
  <div id="container">
      <div id="title">
          <h1>电商后台管理系统</h1>
      </div>
      <div class="input">
          <el-input v-model="name" prefix-icon="user" placeholder="请输入用户名"></el-input>
      </div>
      <div class="input">
        <!-- 设置为new-password指示这是一个新密码输入字段，通常浏览器不会对此类字段应用已保存的密码自动填充，以增强安全性。 -->
          <el-input v-model="password" prefix-icon="lock" placeholder="请输入密码" autocomplete="new-password" show-password></el-input>
      </div>
      <div class="input">
          <el-button @click="login" style="width:500px" type="primary" :disabled="disabled">登录</el-button>
      </div>
  </div>
</template>

<script>
import Storage from '../../tools/Storage'
import { ElMessage } from 'element-plus';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Login",
    data() {
        return {
            name:"",
            password:""
        }
    },
    mounted () {
        this.name = ""
        this.password = ""
    },
    computed: {
        disabled(){
            return this.name.length == 0 || this.password.length == 0;
        }
    },
    methods: {
        login() {
            // commit方法是Vuex store的一个部分，用于提交 mutations。Mutation 是 Vuex 中改变 state 的唯一方法，它们必须是同步的。
            // Storage.commit("registUserInfo",{
            //     name:this.name,
            //     password:this.password
            // }),
            // 或者
            Storage.commit({
                type:'registUserInfo',
                name:this.name,
                password:this.password
            }),
            ElMessage({
                message:'登录成功', 
                type:'success', 
                duration:1500
            }),
            setTimeout(() => {
                // 路由跳转，push方法接收一个对象参数，也可以接收一个字符串参数
                this.$router.push({name:"home"})
            }, 200);
        }
    }
}
</script>

<style scoped>
#container {
    /* background: #595959; */
    background-image: url("~@/assets/login_bg.jpg");
    height: 100%;
    width: 100%;
    position: absolute;
}

#title {
    text-align: center;
    color: azure;
    /* 设置上边距为200像素。 */
    margin-top: 200px;
}

.input {
    /* 设置上下边距为20像素，左右边距为自动，使元素居中对齐。 */
    margin: 20px auto;
    width: 500px;
}

</style>