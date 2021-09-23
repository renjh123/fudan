<template>
  <LayoutHeader></LayoutHeader>
  <div class="container">
    <div class="form">
      <p class="login-title">用户登录</p>
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item name="username">
          <a-input v-model:value="formState.username" placeholder="admin" size="large">
            <template #prefix>
              <user-outlined type="user" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            v-model:value="formState.password"
            placeholder="123456"
            size="large"
          >
            <template #prefix>
              <KeyOutlined />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary"  @click="onSubmit" style="width: 100%"  size="large">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, ref, toRaw, UnwrapRef, h } from "vue";
import { UserOutlined, KeyOutlined } from "@ant-design/icons-vue";
import { notification } from "ant-design-vue";
import { SmileOutlined } from "@ant-design/icons-vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
interface FormState {
  username: string;
  password: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    KeyOutlined,
  },
  setup() {
    const formRef = ref();
    const store = useStore();
    const router = useRouter();
    const formState: UnwrapRef<FormState> = reactive({
      username: "",
      password: "",
    });
    const rules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "change",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "change",
        },
      ],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          store.commit("SET_LOINGSTATE", true);
          store.commit("SET_USERINFO", formState);
          notification.open({
            message: "登录成功",
            description: "",
            icon: h(SmileOutlined, { style: "color: #108ee9" }),
          });
          router.push({ path: "/" });
        })
        .catch((error: ValidateErrorEntity<FormState>) => {
          console.log("error", error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 0 },
      wrapperCol: { span: 24 },
      other: "",
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #2d3a4b;
  display: flex;
  justify-content: center;
  .form {
    width: 400px;
    height: 400px;
    margin-top: 200px;
  }
  .login-title{
    color: #fff;
    text-align: center;
    padding-bottom: 20px;
    font-size: 24px;

  }
}
</style>

