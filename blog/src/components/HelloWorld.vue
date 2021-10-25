<template>
  <h1>
    {{ msg }}
    <n-button  type="primary" @click="theme=darkTheme">Primary</n-button>
    <n-config-provider :theme="theme">
      <n-button>深色</n-button>
    </n-config-provider>
  </h1>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { getData } from "../api/home";
import { NButton, darkTheme,NConfigProvider } from "naive-ui";

const env = import.meta.env;
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  components: { NButton ,NConfigProvider},
  setup: () => {
    console.log([...new Set([10, 10, 10, 1])]);
    const count = ref(0);
    /********************调用api**************** */
    getData({
      page: 1,
      tab: "ask",
      limit: 10,
      mdrender: false,
    }).then((res: object) => {
      console.log(res, 988888);
    });
    /************************************ */
    return { 
      count, 
      theme: ref(darkTheme) 
    };
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
