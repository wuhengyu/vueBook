<template>
<div>
  <com name="子组件组件名"></com>
</div>
</template>

<script>
// h是Vue的渲染函数，用于创建VNode（虚拟DOM节点）；onMounted是Vue生命周期钩子之一，它会在组件实例被挂载到DOM后执行
import {
  h,
  onMounted
} from 'vue'
export default {
  mounted() {
    console.log("组件内定义的mounted");
  },
  // components对象定义了该组件所使用的子组件，此处定义了一个名为com的子组件
  components: {
    com: {
      // props对象指定了子组件接收的外部属性，这里有一个名为name的属性，类型为String，意味着父组件可以通过<com name="组件名"></com>的方式向子组件传递字符串类型的值
      props: {
        name: String,
      },
      // setup(props, context)是Vue 3中用来替代data、methods等选项的新特性函数
      // setup方法特殊的执行时机，除了可以访问组件的传参外部属性props之外，在其内部不能使用this来引用组件的其他属性
      // 在setup方法最后，可以将定义的组件所需要的数据、方法等内容暴露给组件的其他选项（生命周期函数、业务方法、计算属性）
      // setup方法不要使用this关键字，setup方法中的this与当前组件实例并不是同一对象
      setup(props, context) {
        // props：包含了所有父组件传递过来的属性，此处通过console.log(props.name)输出接收到的name属性值。
        console.log(props.name);

        // context：提供了访问额外信息如attrs(非prop属性)、slots(插槽内容)以及emit(触发事件的方法)的上下文对象。
        // 属性
        console.log(context.attrs);
        // 插槽
        console.log(context.slots);
        // 触发事件
        console.log(context.emit);

        let data = "setup的数据";

        // mounted()方法是父组件的一个生命周期钩子，当父组件被挂载到DOM后执行回调函数，会打印出"组件内定义的mounted"
        onMounted(() => {
          console.log("setup定义的mounted");
        });

        // 渲染函数
        // 子组件将渲染一个包含字符串data内容的div元素。这里的h函数就是Vue的虚拟DOM构造函数，用于生成VNode
        return () => h('div', data);
      },
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
