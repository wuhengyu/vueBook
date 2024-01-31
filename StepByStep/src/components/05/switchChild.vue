<template>
  <div :style="cssStyleBG" @click="toggleSwitch">
    <div :style="cssStyleBtn"></div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const props = defineProps({
  switchStyle: String,
  borderColor: String,
  background: {
    type: String,
    // default: "blue",
  },
  color: String,
});

// 将isOpen作为响应式变量管理
const isOpen = ref(false);

// 根据props计算样式
const cssStyleBG = computed(() => {
  const baseStyles = {
    position: "relative",
    borderWidth: "0.01px",
    borderStyle: "solid",
    width: "55px",
    height: "30px",
    borderColor: props.borderColor,
    marginLeft: "500px",
  };

  if (props.switchStyle === "mini") {
    return {
      ...baseStyles,
      borderRadius: "30px",
      // backgroundColor: isOpen.value ? props.background : "white",
      backgroundColor: isOpen.value ? "blue" : "white",
    };
  } else {
    return {
      ...baseStyles,
      borderRadius: "30px",
      // backgroundColor: isOpen.value ? props.background : "white",
      backgroundColor: isOpen.value ? "red" : "white",
    };
  }
});

const cssStyleBtn = computed(() => {
  const btnBaseStyles = {
    position: "absolute",
    borderWidth: "0.01px",
    borderStyle: "solid",
    width: "30px",
    height: "30px",
    backgroundColor: props.color,
  };

  // 假设btn的位置只在switchStyle为"mini"时变化，这里可以根据实际需求调整
  let leftValue = "0px";
  if (
    (props.switchStyle === "mini" || props.switchStyle === "nomini") &&
    isOpen.value
  ) {
    leftValue = "25px";
  }

  return {
    ...btnBaseStyles,
    left: leftValue,
    ...(props.switchStyle === "mini"
      ? { borderRadius: "50%" }
      : { borderRadius: "70%" }),
  };
});

// 定义切换开关的方法，并通过事件向父组件发送状态更新
const toggleSwitch = () => {
  isOpen.value = !isOpen.value;
  emit("switchChange", isOpen.value);
};

const emit = defineEmits(["switchChange"]);
</script>