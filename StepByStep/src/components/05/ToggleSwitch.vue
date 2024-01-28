<template>
  <div id="toggle-switch">
    <toggle-switch-a v-model="switchA" />
    <toggle-switch-b v-model="switchB" />
  </div>
</template>

<script setup>
import ToggleSwitchA from "./ToggleSwitchA.vue";
import ToggleSwitchB from "./ToggleSwitchB.vue";
import { ref } from "vue";

const switchA = ref(false);
const switchB = ref(false);
</script>
<style scoped>
</style>