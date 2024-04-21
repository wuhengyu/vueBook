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
import reactObj from "./components/07/reactObj.vue";
import reactObj1 from "./components/07/reactObj1.vue";
import reactObj2 from "./components/07/reactObj2.vue";
import computedSum from "./components/07/computedSum.vue";
import watchEffect from "./components/07/watchEffect.vue";
import effectRef from "./components/07/effectRef.vue";
import setupMethod from "./components/07/setupMethod.vue";
import normalExample from "./components/07/normalExample.vue";
import setupLife from "./components/07/setupLife.vue";
import normalExample2 from "./components/07/normalExample2.vue";
import transitionExample from "./components/08/transitionExample.vue";
import keyframes from "./components/08/keyframes.vue";
import jsAnimation from "./components/08/jsAnimation.vue";
import vueTransition from "./components/08/vueTransition.vue";
import observer from "./components/08/observer.vue";
import vueMTransition from "./components/08/vueMTransition.vue";
import listAnimation from "./components/08/listAnimation.vue";
import userListDemo from "./components/08/userListDemo.vue";
import axiosDemo from "./components/11/axiosDemo.vue";

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
  "/reactObj": reactObj,
  "/reactObj1": reactObj1,
  "/reactObj2": reactObj2,
  "/computedSum": computedSum,
  "/watchEffect": watchEffect,
  "/effectRef": effectRef,
  "/setupMethod": setupMethod,
  "/normalExample": normalExample,
  "/setupLife": setupLife,
  "/normalExample2": normalExample2,
  "/transitionExample": transitionExample,
  "/keyframes": keyframes,
  "/jsAnimation": jsAnimation,
  "/vueTransition": vueTransition,
  "/observer": observer,
  "/vueMTransition": vueMTransition,
  "/listAnimation": listAnimation,
  "/userListDemo": userListDemo,
  "/axiosDemo": axiosDemo,
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
    <a href="#/reactObj">reactObj</a> |
    <a href="#/reactObj1">reactObj1</a> |
    <a href="#/reactObj2">reactObj2</a> |
    <a href="#/computedSum">computedSum</a> |
    <a href="#/watchEffect">watchEffect</a> |
    <a href="#/effectRef">effectRef</a> |
    <a href="#/setupMethod">setupMethod</a> |
    <a href="#/normalExample">normalExample</a> |
    <a href="#/setupLife">setupLife</a> |
    <a href="#/normalExample2">normalExample2</a> |

    <h3>过渡动画</h3>
    <a href="#/transitionExample">transitionExample</a> |
    <a href="#/keyframes">keyframes</a> |
    <a href="#/jsAnimation">jsAnimation</a> |
    <a href="#/vueTransition">vueTransition</a> |
    <a href="#/observer">observer</a> |
    <a href="#/vueMTransition">vueMTransition</a> |
    <a href="#/listAnimation">listAnimation</a> | 
    <a href="#/userListDemo">userListDemo</a>

    <h1>第11章</h1>
    <h3>vue-axios</h3>
    <a href="#/axiosDemo">axiosDemo</a> |
    <component :is="currentView" />
  </div>
</template>
