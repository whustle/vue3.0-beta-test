<!--
 * @Author: wangjinhui
 * @Date: 2020-07-10 15:23:58
 * @LastEditTime: 2020-07-10 17:11:50
 * @FilePath: \vue3.0-beta-test\src\components\PropsComp.vue
-->

<template>
  <div>
    <hr />
    <div><h1>props</h1></div>
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { watch, watchEffect } from "vue";
export default {
  name: "PropsComp",
  //执行setup之前，先初始化props
  setup(props) {
    //注意 props 对象是响应式的，watchEffect 或 watch 会观察和响应 props 的更新：
    watch(
      () => props.name,
      (name, preName) => {
        console.log(`props name ${name}`);
        console.log(`props preName ${preName}`);
      }
    );
    watchEffect(() => {
      console.log(`watchEffect: ${props.name}`);
    });
  },
  props: ["name"]
};
</script>
