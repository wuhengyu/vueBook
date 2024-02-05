<script setup>
import { ref, computed } from "vue";
import tableDemo from "./components/03/tableDemo.vue";
import countClick from "./components/03/countClick.vue";
import login from "./components/03/login.vue";
import FatherComponents from "./components/vmodel/FatherComponents.vue";
import VModelTrim from "./components/vmodel/VModelTrim.vue";
import VModelcheckList from "./components/vmodel/VModelcheckList.vue";
import userRegistration from "./components/example/userRegistration.vue";
import NotFound from "./components/NotFound.vue";
import eventClick from "./components/04/eventClick.vue";
import eventModifier from "./components/04/eventModifier.vue";
import eventType from "./components/04/eventType.vue";
import titleFather from "./components/05/titleFather.vue";
import vmodelText from "./components/05/vmodelText.vue";
import vmodelFather from "./components/05/vmodelFather.vue";
import slotFather from "./components/05/slot/slotFather.vue";
import slotPage from "./components/05/slot/slotPage.vue";
import switchFather from "./components/05/switchFather.vue";
import componentsLife from "./components/06/componentsLife.vue";
import mixinFather from "./components/06/mixinFather.vue";
import mixins from "./components/06/mixins.vue";
import mixins2 from "./components/06/mixins2.vue";

const routes = {
  "/countClick": countClick,
  "/non-existent-path": NotFound,
  "/": login,
  "/FatherComponents": FatherComponents,
  "/VModelTrim": VModelTrim,
  "/VModelcheckList": VModelcheckList,
  "/userRegistration": userRegistration,
  "/tableDemo": tableDemo,
  "/eventClick": eventClick,
  "/eventModifier": eventModifier,
  "/eventType": eventType,
  "/titleFather": titleFather,
  "/vmodelText": vmodelText,
  "/vmodelFather": vmodelFather,
  "/slotFather": slotFather,
  "/slotPage": slotPage,
  "/switchFather": switchFather,
  "/componentsLife": componentsLife,
  "/mixinFather": mixinFather,
  "/mixins": mixins,
  "/mixins2": mixins2,
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
    <a href="#/tableDemo">tableDemo</a> |

    <h3>文本框父子数据同步</h3>
    <a href="#/FatherComponents">FatherComponents</a> |
    <a href="#/VModelTrim">VModelTrim</a> |
    <a href="#/VModelcheckList">VModelcheckList</a> |

    <h3>用户注册</h3>
    <a href="#/userRegistration">userRegistration</a> |
    <a href="#/eventClick">eventClick</a> |
    <a href="#/eventModifier">eventModifier</a> |
    <a href="#/eventType">eventType</a> |
    <a href="#/titleFather">titleFather</a> |
    <a href="#/vmodelText">vmodelText</a> |
    <a href="#/vmodelFather">vmodelFather</a> |
    <a href="#/slotFather">slotFather</a> | <a href="#/slotPage">slotPage</a> |
    <a href="#/switchFather">switchFather</a> |
    <a href="#/componentsLife">componentsLife</a> |
    <a href="#/mixinFather">mixinFather</a> | <a href="#/mixins">mixins</a> |
    <a href="#/mixins2">mixins2</a> |

    <component :is="currentView" />
  </div>
</template>
