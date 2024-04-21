<template>
<div class="hello">
  <h1>{{ msg }}</h1>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    // 请求拦截
    let myRequestInterceptor = axios.interceptors.request.use((config) => {
      alert("请求将要开始")
      return config
    }, (error) => {
      alert("请求出现错误")
      return Promise.reject(error)
    })

    // let api = "http://apis.juhe.cn/simpleWeather/query?city=%E8%8B%8F%E5%B7%9E&key=cffe158caf3fe63aa2959767a503bbfe"
    // axios.get(api).then((response) => {
    //   console.log(response)
    // })
    let city = "上海"
    city = encodeURI(city)
    let api = `/simpleWeather/query?city=${city}&key=cf4d101f54a271a0d913359192e5a959`
    axios.get("/myApi" + api).then((response) => {
      console.log(response.data)
    })

    // 统一配置URL前缀，超时时间和自定的header
    const instance = axios.create({
      baseURL: '/myApi',
      timeout: 1000,
      headers: {
        'X-Custom-Header': 'custom'
      }
    });
    let api2 = `/simpleWeather/query?city=${city}&key=cf4d101f54a271a0d913359192e5a959`
    instance.get(api2).then((response) => {
      console.log(response.data)
    })
    // 移除拦截器
    // eject()方法用于移除拦截器，避免出现切换路由时，拦截器被重复注册
    axios.interceptors.request.eject(myRequestInterceptor);
  }
}
</script>

<style lang="scss" scoped>
</style>
