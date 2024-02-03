<template>
  <div style="border: blue solid 2px">
    {{ title }}
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
</style>