<template>
  <div>
    {{ count }}
    <button @click="add">点击</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    // 或者 const { count } = toRefs(state);
    // return {
    //   count,
    // };
    return {
      // 通过toRefs函数将state对象转换为一个包含所有属性的响应式引用对象，
      // 并使用展开运算符将这些引用对象展开为一个新对象。最后，返回这个新对象作为组件的返回值。
      // toRefs接收一个响应式对象作为参数，并返回一个新的普通对象
      // 这样做的目的是为了在保持响应性的同时，能够直接解构这些属性并在模板中或者其他地方使用。
      // 通过 ...toRefs(state)，组件返回了一个新对象，这个对象拥有与 state 相同的属性名，并且每个属性都具有与 state 原始属性相同的响应式行为。这使得在模板中可以像处理普通属性一样处理它们，同时保持数据的响应性更新。
      // 和ref定义的数据一样，数据对象会自动展开
      ...toRefs(state),
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>