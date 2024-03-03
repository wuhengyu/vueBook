<template>
<div id="Application">
  <com name="组件名"></com>
</div>
</template>

<script>
import {
  h,
  onMounted
} from 'vue'
export default {
  components: {
    com: {
      // context包含了组件的上下文信息，包括非props属性、插槽和事件触发器。
      // props用于接收父组件传递过来的属性值
      setup(props, context) {
        console.log(props.name)
        // 属性
        // 包含了所有非props的特性（attributes），即除了props之外传给组件的所有属性对象
        console.log(context.attrs)
        // 插槽 
        // 返回一个对象，包含了组件的所有插槽内容。
        console.log(context.slots)
        // 触发事件 
        // 函数用于在当前组件内触发自定义事件
        console.log(context.emit)
        // 定义了一个变量data并赋值为字符串"setup的数据"
        let data = "setup的数据";
        // 组件中和setup方法中定义了同样的生命周期方法，并不冲突，但是会先调用setup方法定义的，再调用组件中定义的
        // 使用onMounted生命周期钩子在组件挂载后执行回调函数，打印字符串"setup定义的mounted"。
        // 注意，在Vue 3中，setup中的生命周期钩子优先于组件选项中的同名钩子执行。
        onMounted(() => {
          console.log("setup定义的mounted")
        })
        // 使用Vue的渲染函数h生成一个虚拟DOM元素div，并将data作为其内容
        return () => h('div', [data])
      },
      // 对子组件com接收父组件传递属性的定义，表明com组件期望接收一个名为name且类型为字符串的属性
      props: {
        name: String,
      },
      // 这是Vue组件的一个生命周期钩子，在组件实例被挂载到DOM树之后调用。
      mounted() {
        console.log("组件内定义的mounted")
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
