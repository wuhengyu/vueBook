<template>
  <div>
    <button @click="click">{{ title }}</button>
  </div>
</template>

<script setup>
// 声明该组件接收一个名为title的属性，类型为字符串
const props = defineProps({
  title: String,
});
// 声明该组件会对外触发一个名为myclick的自定义事件。在父组件中可以监听此事件并执行相应操作。
// 使用对象方式 (defineEmits({})) 的优势在于你可以明确指定事件所对应的回调函数参数类型。这样可以使你的代码更加健壮，并且在编辑器中能够提供更好的代码提示和类型检查。
// 使用字符串数组方式 (defineEmits([])) 则更加简洁，对于一些不需要传递参数的简单事件，这种方式可能更方便快捷。
const emit = defineEmits(["myclick"]);
// 触发一个自定义事件"myclick"并将字符串"hello world"作为参数传递出去
function click() {
  console.log("appfunc");
  // emit 方法来触发一个自定义事件，并传递需要的数据
  // 如果在子组件中没有通过 emit 触发自定义事件，即使父组件绑定了该事件的回调函数，这个回调函数也不会执行。
  emit("myclick", "hello world");
}
</script>

<style lang="scss" scoped>
</style>