<template>
  <div :style="cssStyleBG" @click="click">
    <div :style="cssStyleBtn"></div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({ switchStyle: String });

const cssStyleBG = computed({
  get() {
    if (props.switchStyle == "mini") {
      return "width: 100%;";
    }
  },
});

const cssStyleBtn = computed({
  get() {
    if (props.switchStyle == "mini") {
      return "width: 100%;";
    }
  },
});
</script>

<style lang="scss" scoped>
</style>