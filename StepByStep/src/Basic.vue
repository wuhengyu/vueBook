<script setup>
import { ref, computed } from "vue";
import NotFound from "./components/NotFound.vue";
import countClick from "./components/countClick.vue";
import login from "./components/login.vue";
import FatherComponents from "./components/VModel/FatherComponents.vue";
import VModelTrim from "./components/VModel/VModelTrim.vue";
import VModelcheckList from "./components/VModel/VModelcheckList.vue";
import UserRegistration from "./components/example/UserRegistration.vue";

const routes = {
  "/countClick": countClick,
  "/non-existent-path": NotFound,
  "/": login,
  "/FatherComponents": FatherComponents,
  "/VModelTrim": VModelTrim,
  "/VModelcheckList": VModelcheckList,
  "/UserRegistration": UserRegistration,
};
const currentPath = ref(window.location.hash);
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>
<template>
  <div>
    <h1>第二章</h1>
    <h3>登录</h3>
    <a href="#/countClick">countClick</a> | <a href="#/login">login</a> |

    <h3>文本框父子数据同步</h3>
    <a href="#/FatherComponents">FatherComponents</a> |
    <a href="#/VModelTrim">VModelTrim</a> |
    <a href="#/VModelcheckList">VModelcheckList</a> |

    <h3>用户注册</h3>
    <a href="#/UserRegistration">UserRegistration</a> |
    <component :is="currentView" />
  </div>
</template>

