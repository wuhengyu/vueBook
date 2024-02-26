<template>
  <div>
    <!-- 响应式 -->
    <h1>测试数据：{{number}}</h1>

    <!-- 失去响应 -->
    <!-- <h1>测试数据：{{value}}</h1> -->

    <!-- 非响应式 -->
    <!-- <h1>测试数据：{{number.value}}</h1> -->
      <button @click="click">点击</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup () {
      // 响应式
      let myObject = reactive({
        number:0
      })
      let { number } = toRefs(myObject)

      // 非响应式
      // let number = {
      //   value:0
      // }
      function click() {
        number.value += 1
          console.log(number.value)
      }
      return {
        number,
        click
      }
  }
}
</script>

<!-- <script>
import { reactive } from "vue";
export default {
  setup () {
      // 响应式
      let myObject = reactive({
        value:0
      })
      // 对myObject对象进行解构，获取value属性, 但是失去响应性，可以使用toRefs方法进行对象的解构，转换为ref变量，使其具有响应性 
      let { value } = myObject

      function click() {
        value += 1
        console.log(value)
      }
      return {
        value,
        click
      }
  }
}
</script> -->

<style lang="scss" scoped>
</style>