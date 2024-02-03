<template>
  <div>
    <mixinChild1 title="组件1"></mixinChild1>
    <mixinChild2 title="组件2"></mixinChild2>
    <mixinChild3 title="组件3"></mixinChild3>
  </div>
</template>

<script setup>
import mixinChild1 from "./mixinChild1.vue";
import mixinChild2 from "./mixinChild2.vue";
import mixinChild3 from "./mixinChild3.vue";
</script>

<style lang="scss" scoped>
</style>