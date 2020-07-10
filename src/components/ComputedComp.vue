<!--
 * @Author: wangjinhui
 * @Date: 2020-07-09 16:56:19
 * @LastEditTime: 2020-07-10 15:39:19
 * @FilePath: \vue3.0-beta-test\src\components\ComputedComp.vue
-->
<template>
  <div>
    <hr />
    <div>num: {{ num }}</div>
    <div>numC: {{ numC }}</div>
    <button @click="click">点击</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "ComputedComp",
  setup() {
    const num = ref(1);
    const numC = computed(() => num.value + 2);
    //可以在setup中定义方法
    // const click = () => {
    //   num.value++;
    // };
    // 需要return
    return {
      num,
      numC
    };
  },
  methods: {
    click() {
      this.num.value++;
    }
  }
};
</script>
