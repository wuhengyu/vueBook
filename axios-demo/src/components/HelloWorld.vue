<template>
<div class="hello">
  <!-- 插值表达式 -->
  <h1>{{ msg }}</h1>
</div>
</template>

<script lang="ts">
// defineComponent是Vue提供的用于定义组件的工具函数
import {defineComponent} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  // 生命周期钩子
  // 组件被挂载到DOM且完成渲染后调用
  mounted() {

    // 请求拦截
    // 注册一个全局请求拦截器,每当有请求发出时，此拦截器会先执行。
    let myRequestInterceptor = axios.interceptors.request.use((config) => {
      alert("请求将要开始")
      return config
    }, (error) => {
      alert("请求出现错误")
      return Promise.reject(error)
    });

    let city = "上海"
    // 确保其包含的特殊字符不会影响URL构造
    // encodeURI()方法用于对字符串进行编码
    city = encodeURI(city)
    let api = `/simpleWeather/query?city=${city}&key=cf4d101f54a271a0d913359192e5a959`
    axios.get("/myApi" + api).then((response) => {
      console.log(response.data)
    })

    // 统一配置URL前缀，超时时间和自定的header
    // 使用axios.create()方法创建一个新的axios实例
    // const instance = axios.create({
    //   // 通过此实例发起的请求的公共基础URL为/myApi
    //   baseURL: '/myApi',
    //   timeout: 1000,
    //   headers: {
    //     'X-Custom-Header': 'custom'
    //   }
    // });
    // let api2 = `/simpleWeather/query?city=${city}&key=cf4d101f54a271a0d913359192e5a959`
    // instance.get(api2).then((response) => {
    //   console.log(response.data)
    // })

    // 移除拦截器
    // eject()方法用于移除拦截器，避免出现切换路由时，拦截器被重复注册
    axios.interceptors.request.eject(myRequestInterceptor);
  },
});
</script>

<style scoped>
</style>
