<template>
  <div>
    <p>{{ mixinMessage }}</p>
  </div>
</template>

<script>
const myMixin = {
  data() {
    return {
      mixinMessage: "Mixin中的消息",
    };
  },
  created() {
    console.log("Mixin被创建");
  },
};

export default {
  mixins: [myMixin],
  data() {
    return {
      mixinMessage: "相同属性，组件中的消息",
    };
  },
  created() {
    console.log("组件被创建");
    console.log(this.mixinMessage); // 输出：组件中的消息
  },
};
</script>