<template>
    <h1>用户中心</h1>
    <h1>姓名:{{$route.params.username}}</h1>
    <!-- 二级路由的页面出口 -->
    <router-view></router-view>
</template>

<script>
export default {
    mounted() {
        console.log(`组件加载，请求数据。路由参数为name:${this.$route.params.username} `)
    },
    beforeRouteUpdate(to, from) {
        console.log(to,from)
        console.log(`组件加载，请求数据。路由参数为name:${to.params.username} `)
    }
};
</script>