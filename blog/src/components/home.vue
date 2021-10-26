<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import {getValue} from '../api/home'

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);

    onMounted(() => {
      getValue({id:1}).then(res=>{
       console.log(res);
      },err=>{
        console.log(err);
      })
    });

    return { count };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
