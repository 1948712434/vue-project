<template>
  <div class="box">
    <n-avatar
      :size="45"
      :src="logo"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { NAvatar } from "naive-ui";
import logo from '@/assets/logo.png'

export default defineComponent({
  name: "header",
  components: {
    NAvatar,
  },
  setup() {
      return {
          logo
      }
  },
});
</script>

<style lang="less" scoped>
.box {
  box-sizing: border-box;
  padding: 10px 25px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
