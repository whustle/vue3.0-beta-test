<!--
 * @Author: wangjinhui
 * @Date: 2020-07-10 09:23:36
 * @LastEditTime: 2020-07-10 15:37:30
 * @FilePath: \vue3.0-beta-test\src\components\ReactiveToRefsComp.vue
-->
/* 但是在具体的业务中，如果无法使用解构取出 reactive() 对象的值，每次都需要通过
. 操作符访问它里面的属性会是非常麻烦的，所以官方提供了 toRefs()
函数来为我们填好这个坑。只要使用 toRefs() 把 reactive()
对象包装一下，就能够通过解构单独使用它里面的内容了，而此时的内容也依然维持着响应式的特性*/
<template>
  <div>
    <hr />
    <div>count: {{ num }}</div>
    <div>name:{{ name }}</div>
    <button @click="click">点击</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "ReactiveToRefsComp",
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
      ...toRefs(state),
      click
    };
  }
};
</script>
