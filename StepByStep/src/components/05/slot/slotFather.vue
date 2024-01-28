<template>
  <div>
    <slotChild></slotChild>
    <slotChild>设置了内容后，不再显示插槽默认内容</slotChild>

    <!-- 使用template标签来包装插槽内容，对于template标签
    通过v-slot来指定与其对应的插槽位置 -->
    <slotChild>
      <template v-slot:header>
        <h1>头部内容</h1>
      </template>
      <template v-slot:main>
        <p>内容部分</p>
      </template>
      <template v-slot:footer>
        <p>底部内容</p>
      </template>
    </slotChild>
  </div>
</template>

<script setup>
import slotChild from "./slotChild.vue";
</script>

<style lang="scss" scoped>
</style>