<template>
  <n-notification-provider>
    <div :class="{ padding: showHeader }">
      <top-header v-if="showHeader"></top-header>
      <router-view></router-view>
    </div>
  </n-notification-provider>
</template>

<script lang="ts">
import { toRaw, defineComponent } from "vue";
import { NNotificationProvider } from "naive-ui";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import topHeader from "@/pages/header/header.vue";

export default defineComponent({
  name: "App",
  components: {
    topHeader,
    NNotificationProvider,
  },
  setup(props, context) {
    //保存是否显示header的路由
    let routerList: string[] = useStore().state.app.showHeaderRouter;
    let router: any = toRaw(useRoute()); //获取当前路由
    let showHeader: any = routerList.includes(router.name.value);

    return {
      showHeader,
    };
  },
});
</script>

<style lang="less">
.padding {
  padding-top: 70px;
}
</style>
