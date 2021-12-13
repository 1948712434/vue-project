<template>
  <h1>
    {{ msg }}
    <span>哈哈哈</span>
  </h1>

  <el-button>element</el-button>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { getData } from "../api/home";
const env = import.meta.env;
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  setup: () => {
    console.log([...new Set([10,10,10,1])])
    const count = ref(0);
    /********************调用api**************** */
    getData({
      page: 1,
      tab: "ask",
      limit: 10,
      mdrender: false,
    }).then((res:object) => {
      console.log(res, 988888);
    });
    /************************************ */
    return { count };
  },
});
</script>

<style scoped lang="less">
h1 {
  color: red;

  span {
    color: #333;
  }
}
</style>
