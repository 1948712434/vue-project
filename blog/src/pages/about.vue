<template>
  <div>
    <h1>about</h1>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "about",
  setup: (props,context) => {
    
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
