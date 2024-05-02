<template>
    <h1>用户编号</h1>
    <h2>ID:{{$route.params.id}}</h2>
    <el-button type="primary" @click="click">跳转User</el-button>
</template>

<script>
// import User from "./UserSetting.vue";
export default {
//   created钩子, Vue组件实例被创建之后，挂载到DOM之前调用, 组件生命周期的第一个阶段，在这里可以执行一些数据获取、初始化设置等操作
// Vue组件实例已创建
// 挂载到DOM之前调用
    created() {
    // 可以获取当前组件实例
    // console.log(this);
    console.log("created");
    // 动态向路由配置中添加一个新路由, 实际开发中不推荐在运行时动态修改路由
    // this.$router.addRoute({
    //   path: "/User:id",
    //   component: User,
    // });
  },
  methods: {
    click() {
      // 导航到/demo2路由
      this.$router.push("/User/1234567890");
    },
    fetchData(id) {
      // 这个方法将被 beforeRouteUpdate 调用，用于获取路由参数
      console.log("Fetching data for ID:", id);
    }
  },
  // 全局或组件级的路由进入守卫，在渲染该组件之前被调用，且不能访问this，因为组件实例还未被创建。
  // 在进入该组件之前调用，接收to（即将进入的路由）、from（当前路由）作为参数
  beforeRouteEnter(to, from, next) {
    console.log(to, from, "前置守卫");
    // w是当前组件实例
    // next回调函数处理组件实例，如果next()没有传递参数，则进入路由
    // 使用箭头函数形式的next回调，确保在组件被创建后执行某些操作（此处仅为示例，打印了回调中的组件实例w）。实际应用中可能用于异步数据预取
    next((w)=>{
      console.log("w");
      console.log(w);
    })
    return true;
  },
  // 当路由参数改变但仍在同一个组件内时调用
  // 当路由参数变化但组件复用时调用，即组件内的参数更新但不重新渲染整个组件。
  beforeRouteUpdate(to, from, next) {
    // 获取当前组件实例
    console.log(this)
    console.log(to, from, "路由参数有更新时的守卫");
    // 调用 fetchData 方法，传入更新后的路由参数
    this.fetchData(to.params.id);
    next();
  },
  // 在离开当前组件时调用，同样打印组件实例及to和from路由信息，通常用于确认或清理操作
  // 在当前路由离开之前被调用，可用于确认用户操作或执行清理工作。
  // 此守卫无需调用next，因为它不阻塞导航，默认情况下导航将继续。
  beforeRouteLeave(to, from) {
    // 获取当前组件实例
    console.log(this)
    console.log(to, from, "离开页面");
  },
};
</script>
