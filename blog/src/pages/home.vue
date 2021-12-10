<template>
  <h1>{{ msg }}</h1>
  <n-button @click="getSpace">888</n-button>
  <router-link to="/about">about</router-link>
  <router-link to="/login">login</router-link>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import { getValue, space } from "../api/home";
import { NButton } from "naive-ui";

export default defineComponent({
  name: "home",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  components: {
    NButton,
  },
  setup: (props, context) => {
    const count = ref(0);
    onMounted(() => {
      getValue({ id: 1 }).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    });

    const getSpace = () => {
      space().then((res) => {
        console.log(res);
      });
    };

    return { count, getSpace };
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
