<!--
 * @Author: wangjinhui
 * @Date: 2020-07-01 16:51:55
 * @LastEditTime: 2020-07-10 17:00:21
 * @FilePath: \vue3.0-beta-test\src\views\Home.vue
-->
<template>
  <div class="home">
    <button @click="click">按钮</button>
    <ref-comp />
    <reactive-comp />
    <reactive-to-refs-comp />
    <computed-comp />
    <props-comp :name="propsName"></props-comp>
  </div>
</template>

<script>
import RefComp from "@/components/RefComp";
import ReactiveComp from "@/components/ReactiveComp";
import ReactiveToRefsComp from "@/components/ReactiveToRefsComp";
import ComputedComp from "@/components/ComputedComp";
import PropsComp from "@/components/PropsComp";
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    const propsName = ref("marstor");
    const click = () => {
      propsName.value += "1";
    };
    return {
      propsName,
      click
    };
  },
  components: {
    RefComp,
    ReactiveComp,
    ReactiveToRefsComp,
    ComputedComp,
    PropsComp
  }
};
</script>
