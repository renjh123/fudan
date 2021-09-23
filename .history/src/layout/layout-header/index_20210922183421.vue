<template>
  <div class="header">
    <div class="df a-center">
      <img src="https://www.fudan.edu.cn/_upload/site/00/02/2/logo.png" class="logo"/>
      <p class="title">应用健康度评估系统</p>
    </div>
    <div class="df a-center">
      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
      &nbsp;&nbsp;
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          {{ username }}
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;" @click="logout">退出登录</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">个人信息</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { DownOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const logout = () => {
      store.commit("SET_LOINGSTATE", false);
      router.push({ path: "/login" });
    };
    const username = computed(() => {
      return store.state.user.userInfo.username;
    });
    return {
      logout,
      store,
      username,
    };
  },
});
</script>
<style lang="less">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: #3479e8;
}
.logo{
  height: 54px;
}
.title{
  font-size: 18px;
  color: #fff;
  margin: 0 0 0 30px;
}
.df{
  display: flex;
}
.a-center{
  align-items: center;
}
.j-space-between{
  justify-content: space-between;
}
.ant-dropdown-link{
  color:
}
</style>
