<template>
  <div>
    <h1>我们是第一个测试页面</h1>
    <el-button type="primary" @click="click">动态路由跳转</el-button>
  </div>
</template>
<script>
import DemoTwo from './DemoTwo.vue';
export default{
  created() {
    console.log(this);
    // 动态添加路由，单独不能访问/dongtailuyou
    let call = this.$router.addRoute({
      path: "/dongtailuyou",
      component: DemoTwo,
      name: "dongtailuyou"
    });
    // 检查已经注册的路由中是否包含某个路由
    console.log(this.$router.hasRoute("dongtailuyou"));
    // 获取现有的路由列表
    console.log(this.$router.getRoutes());
    // 删除路由后，别名和子路由都会被删除
    // 直接移除该路由
    call();
    // 通过名称来删除该路由
    this.$router.removeRoute("dongtailuyou");
  },
  methods: {
    click() {
      this.$router.push("/dongtailuyou");
    },
  },
}
</script>