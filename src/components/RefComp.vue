<!--
 * @Author: wangjinhui
 * @Date: 2020-07-09 16:56:19
 * @LastEditTime: 2020-07-09 17:26:48
 * @FilePath: \vue3.0-beta-test\src\components\RefComp.vue
-->
<template>
  <div>
    <div>num: {{ num }}</div>
    <div>name: {{ name }}</div>
    <button @click="click">点击</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "RefComp",
  setup() {
    const num = ref(0);
    const name = ref("marstor");
    //在script中通过.value获取
    const click = () => {
      num.value++;
    };
    // 需要return
    return {
      num,
      name,
      click
    };
  }
};
</script>
