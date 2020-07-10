<!--
 * @Author: wangjinhui
 * @Date: 2020-07-09 17:27:22
 * @LastEditTime: 2020-07-10 09:40:03
 * @FilePath: \vue3.0-beta-test\src\components\ReactiveComp.vue
-->
<template>
  <div>
    <hr />
    <div>count: {{ state.num }}</div>
    <div>name:{{ state.name }}</div>
    <button @click="click">点击</button>
  </div>
</template>
/* 但是在具体的用法上，通过 reactive()
包装的对象会有一个坑。如果想要保持对象内容的响应式能力，在 return
的时候必须把整个 reactive()
对象返回，同时在引用的时候也必须对整个对象进行引用而无法解构，否则这个对象内容的响应式能力将会丢失。*/
<script>
import { reactive } from "vue";
export default {
  name: "ReactiveComp",
  setup() {
    const state = reactive({
      num: 0,
      name: "marstor"
    });

    const click = () => {
      state.num++;
    };

    // return {
    //   state
    // };
    return {
      state,
      click
    };
  }
};
</script>
