<template>
  <a-layout>
    <a-layout-sider>
      <LayoutMenu></LayoutMenu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <LayoutHeader></LayoutHeader>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <LayoutContent>
        </LayoutContent>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import LayoutHeader from "./layout-header/index.vue";
import LayoutMenu from "./layout-menu/index.vue";
import LayoutContent from "./layout-content/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    LayoutHeader,
    LayoutMenu,
    LayoutContent,
  },
  setup() {
    return {};
  },
});
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout {
  min-height: 100vh  !important;
}
</style>
