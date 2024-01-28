<!-- ToggleSwitchA.vue -->
<template>
  <div
    class="toggle-switch-a"
    :style="{ backgroundColor: switchedOn ? onBgColor : offBgColor }"
    @click="toggleSwitch"
  >
    <div
      class="toggle-circle"
      :style="{ borderColor: switchedOn ? onBorderColor : offBorderColor }"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: Boolean,
  onBgColor: {
    type: String,
    default: "#4CAF50", // 默认打开状态的背景色
  },
  offBgColor: {
    type: String,
    default: "#ccc", // 默认关闭状态的背景色
  },
  onBorderColor: {
    type: String,
    default: "#4CAF50", // 默认打开状态的边框颜色
  },
  offBorderColor: {
    type: String,
    default: "#ccc", // 默认关闭状态的边框颜色
  },
});

const switchedOn = ref(props.modelValue);

const toggleSwitch = () => {
  switchedOn.value = !switchedOn.value;
  emit("update:modelValue", switchedOn.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    switchedOn.value = newValue;
  }
);
</script>

<style scoped>
.toggle-switch-a {
  cursor: pointer;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  position: relative;
  transition: background-color 0.3s;
}

.toggle-circle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s, border-color 0.3s;
  border: 2px solid;
  transform: translateX(var(--translate-x, 0));
}

.toggle-switch-a:hover .toggle-circle {
  border-width: 3px;
}

.toggle-switch-a {
  --translate-x: 0;
}

.toggle-switch-a[style*="background-color: rgb(76, 175, 80);"] .toggle-circle {
  --translate-x: 30px;
}
</style>