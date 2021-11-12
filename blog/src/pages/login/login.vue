<template>
  <n-notification-provider>
    <div class="box">
      <img class="logo" src="@/assets/svg/login.svg" alt="" />
      <div class="right">
        <h1>{{model}}</h1>
        <n-form :model="formData" class="form" ref="formRef" :rules="rules">
          <n-form-item path="useName">
            <n-input placeholder="请输入用户名" v-model:value="formData.useName">
              <template #prefix>
                <n-icon>
                  <person />
                </n-icon> </template
            ></n-input>
          </n-form-item>
          <n-form-item path="passWorld">
            <n-input placeholder="请输入密码" v-model:value="formData.passWorld"
              ><template #prefix>
                <n-icon>
                  <shield-checkmark-sharp />
                </n-icon> </template
            ></n-input>
          </n-form-item>
          <n-form-item>
            <n-button type="info" @click="login" :block="true"
              >立即{{model}}</n-button
            >
          </n-form-item>
          <div style="text-align: right">
            <n-button
              text
              tag="a"
              target="_blank"
              type="info"
              @click="tabModel"
              >{{model==='登录'?'注册账号':'已有账号，立即登录'}}</n-button
            >
          </div>
        </n-form>
      </div>
    </div>
  </n-notification-provider>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import {
  NForm,
  NFormItem,
  NInput,
  NNotificationProvider,
  useNotification,
  NButton,
  NIcon,
} from "naive-ui";
import { Person, ShieldCheckmarkSharp } from "@vicons/ionicons5";

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NButton,
    NInput,
    NIcon,
    Person,
    useNotification,
    ShieldCheckmarkSharp,
    NNotificationProvider,
  },
  setup() {
    let formData:object = reactive({
      useName: "",
      passWorld: "",
    });

    //表单的refs
    const formRef: any = ref(null);

    //登录和注册
    let model:any = ref('登录');

    //切换登录和注册
    const tabModel = ()=>{
      if(model.value==='登录'){
        model.value='注册';
      }else{
        model.value='登录';
      }
      formRef.value.restoreValidation();
    }

    //信息弹窗
    const notification = useNotification();

    //表单验证规则
    let rules = reactive({
      useName: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入用户名",
      },
      passWorld: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入用户名密码",
      },
    });

    let login = () => {
      formRef.value.validate((errors: any) => {
        if (!errors) {
          console.log(`登陆中...`);
        } else {
          notification.warning({
            content: "提示",
            meta: "请填写用户名和密码！",
            duration: 5000,
          });
        }
      });
    };

    return {
      tabModel,
      notification,
      formRef,
      model,
      formData,
      rules,
      login,
    };
  },
});
</script>

<style lang="less" scoped>
.box {
  padding-top: 10px;
  position: relative;
  height: calc(100vh - 20px);
  box-sizing: border-box;

  .form {
    text-align: left;
  }
}
.logo {
  height: 100%;
  width: 70%;
}
.right {
  position: absolute;
  left: 70%;
  width: 315px;
  border-radius: 15px;
  height: 400px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 15px;

  &:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
