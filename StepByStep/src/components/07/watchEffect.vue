<template>
<div>
  组件初始化收集所有依赖，无需手动指定要监听的变量
</div>
</template>

<script>
import {
  ref,
  watchEffect
} from 'vue';
export default {
  setup() {
    let a = ref(1);
    let stop = watchEffect(() => {
      // 当变量a变化时，即会执行当前函数
      console.log("变量a变化了")
      console.log(a.value)
    })
    a.value = 2;
    // 手动停止监听
    stop();
    a.value = 3;
    return {
      a
    }
  }
}
</script>
<!-- 在代码中，a.value首先被设置为2，然后立即变为3。尽管在这两个操作之间存在一个watchEffect监听器，
但watchEffect的作用是在其内部的副作用函数中执行所有依赖项（这里是a）的即时收集和同步触发。
由于console.log(a.value)是在watchEffect回调内，当a.value从1变为2时，确实会触发watchEffect并输出"变量a变化了"以及此时a的新值，即2。
但是这个输出结果并不会在实际的控制台中持久保留，因为控制台是异步渲染的，且紧接着下一行代码立刻将a.value又改为3，
所以你可能只会看到最后一次变化的结果，即3。 -->

<style lang="scss" scoped>

</style>
