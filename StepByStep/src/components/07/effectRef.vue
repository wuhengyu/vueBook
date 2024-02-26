<template>
  <div>
    watch可以监听数据的变化，但是只能监听单个属性的变化，如果要监听多个属性的变化，需要使用watchEffect。
    可以分别获取变化前和变化后的值。
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
  setup () {
    // 创建响应式对象a
    // 当a对象内部的属性（例如data）发生变化时，视图将会自动更新以反映这些变化
      let a = reactive({
          data:0
      });
      // 创建响应式引用b, 在Vue3中，对于基本类型的值，我们通常使用ref来创建响应式变量，访问其值时需要通过.value属性。
      let b = ref(0);
      // 使用watch函数设置一个监听器，它会同时监视两个源：一是a对象的data属性值（通过返回它的匿名函数实现），二是变量b的值。当这两个源中的任何一个值发生变化时，回调函数会被执行。
      watch([()=>{
          // 监听a对象的data属性变化
          return a.data
          // 回调函数接收两个参数，分别是新值数组[valueA, valueB]和旧值数组[oldA, oldB]
      },b], ([valueA, valueB], [oldA, oldB])=>{
          // 新值和旧值都可以获取到
          console.log("新值：", valueA, "旧值：", oldA)
          console.log("新值：", valueB, ", 旧值：", oldB)
      })
      // 触发上述监听器，直接修改a对象的data属性值为1，并将b的值改为3，这样就会立即触发监听回调并打印出变化前后的值
      a.data = 1;
      b.value = 3;
  }
}
</script>

<style lang="scss" scoped>

</style>