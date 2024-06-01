<!-- eslint-disable vue/multi-word-component-names -->
<!-- <template>
  <div>
    主页
    <br>
    {{ msg }}
    <hr>
    {{ msg2 }}
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      msg2: 'Welcome to Your Home'
    }
  }
}
</script> -->


<template>
  <el-container id="container">
      <el-aside width="250px">
          <el-container id="top">
              <img style="width:25px;height:25px;margin:auto;margin-right:0;" src="~@/assets/logo.png"/>

              <div style="margin:auto;margin-left:10px;color:#ffffff;font-size:17px">
                  电商后台管理
              </div>
          </el-container>
          <el-menu
          :default-active="$route.path"
          style="height:100%"
          background-color="#ffffff"
          text-color="black"
          active-text-color="red"
          @select="selectItem">
          <el-sub-menu index="1">
              <template #title>
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
              </template>
              <el-menu-item index="/home/order/0">普通订单</el-menu-item>
              <el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
              <template #title>
              <i class="el-icon-s-shop"></i>
              <span>商品管理</span>
              </template>
              <el-menu-item index="/home/goods/0">普通商品</el-menu-item>
              <el-menu-item index="/home/goods/1">秒杀商品</el-menu-item>
              <el-menu-item index="/home/goods/2">今日推荐</el-menu-item>
              <el-menu-item index="/home/category">商品分类</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
              <template #title>
              <i class="el-icon-s-custom"></i>
              <span>店长管理</span>
              </template>
              <el-menu-item index="/home/ownerlist">店长列表</el-menu-item>
              <el-menu-item index="/home/ownerreq">店长申请审批列表</el-menu-item>
              <el-menu-item index="/home/ownerorder">店长订单</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
              <template #title>
              <i class="el-icon-s-ticket"></i>
              <span>财务管理</span>
              </template>
              <el-menu-item index="/home/tradeinfo">交易明细</el-menu-item>
              <el-menu-item index="/home/tradelist">财务对账单</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
              <template #title>
              <i class="el-icon-s-tools"></i>
              <span>基础管理</span>
              </template>
              <el-menu-item index="/home/data">数据统计</el-menu-item>
          </el-sub-menu>
          </el-menu>
      </el-aside>
      <el-main style="padding:0">
          <!-- 添加一个通用的头部{{this.$Store.state.userName}} -->
          <el-header style="margin:0;padding:0;" height="35px">
              <el-container style="background-color:#ffffff;margin:0;padding:0;height:50px;">
                  <div style="margin: auto;margin-left:100px;"><h1>欢迎{{userName}}登录后台管理系统</h1></div>
                  <div style="margin: auto;margin-right:50px"><el-button type="primary" @click="logout">注销</el-button></div>
              </el-container>
          </el-header>
          <!-- 这里用来渲染具体的功能模块 -->
          <router-view></router-view>
      </el-main>
  </el-container>
</template>

<script>
import Storage from '../../tools/Storage'
import { mapState } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"Login",
  // 和下方computed作用一致
  // 直接赋值方式，，它假设mapState(['userName'])直接返回一个对象，然后将其作为computed属性的唯一值。
  // 这种写法简洁，但在某些情况下可能不适用于所有环境或当computed还需要包含其他自定义计算属性时，因为它直接覆盖了整个computed对象。
  computed: mapState(['userName']),
  methods: {
      logout() {
          Storage.commit('clearUserInfo');
          this.$router.push({name:'login'})
      },
      selectItem(index) {
          this.$router.push(index)
      },
  },
  // 依赖于其它数据属性并具有缓存功能的计算属性，计算属性会在其相关依赖发生变化时自动重新计算
  // mapState函数是VueX提供的一个辅助函数，用于将state中的某个属性映射到计算属性中，方便在组件中使用
  // 自定义一个计算属性
  // computed: {
  //     userName() {
  //         return this.$store.state.userName;
  //     }
  // }

  // 等价于
  // 展开运算符
  // 使用展开运算符的方式更加通用和灵活。它将mapState(['userName'])返回的对象解构并展开到当前computed对象中。
  // 如果你还需要定义其他的计算属性，可以直接在同一个computed对象中添加，而不会被mapState的返回值覆盖。
  // computed: {
  //     ...mapState(['userName']),
  //     }
}
</script>

<style scoped>
#container {
  height: 100%;
  width:100%;
  position: absolute;
}
#top {
  background-color:#000000;
  margin-right:1px;
  text-align: center;
  height: 60px;
}

</style>
