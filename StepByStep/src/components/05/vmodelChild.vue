<template>
  <div>
    <!-- 遵循Vue官方推荐的命名约定——将props命名为modelValue并且触发事件为update:modelValue-->
    <!-- 不需要使用v-model进行双向数据绑定，或者你正在编写的是一个简单的、不涉及v-model特性的输入框组件，那么modelValue是可以替换为其他任何符合变量命名规则的名称的 -->
    <!-- 所有支持v-model指令的组件中默认都会提供一个名为modelValue的属性，而组件内部的内容变化后向外传递的事件为update:modelValue，并且在事件传递时会将组件内容作为参数进行传递 -->
    <input :value="modelValue" @input="action" />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "Hello World!",
  },
});

// defineEmits 函数用于定义组件可以发出的事件
// const emit = defineEmits(["modelValue"]);
// 使用对象方式 (defineEmits({})) 的优势在于你可以明确指定事件所对应的回调函数参数类型。这样可以使你的代码更加健壮，并且在编辑器中能够提供更好的代码提示和类型检查。
// 使用字符串数组方式 (defineEmits([])) 则更加简洁，对于一些不需要传递参数的简单事件，这种方式可能更方便快捷。
const emit = defineEmits({
  // 声明了一个名为update:modelValue的事件，其参数类型为空(null)，表示该事件不携带参数
  "update:modelValue": null,
});

// action函数是输入框input事件的回调函数，当用户在输入框中输入时触发
function action(event) {
  // 用户更改子组件内input元素的值时，将新的输入值发送给父组件，以便同步更新父组件的状态
  // 用于触发自定义事件并向父级组件传递数据
  // 事件传递时，将input元素的值作为参数传递给父组件
  // 子组件需要通过这个特定名称的事件来通知父组件更新model的值
  // update:modelValue，触发的事件名称，当使用v-model对组件进行双向绑定时，子组件需要通过这个特定名称的事件来通知父组件更新model的值
  // event.target.value，触发事件的元素（如输入框）当前的值
  emit("update:modelValue", event.target.value);
}
</script>

<style lang="scss" scoped>
</style>