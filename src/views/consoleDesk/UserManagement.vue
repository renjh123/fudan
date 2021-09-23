
<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="APM">
      <apm></apm>
    </a-tab-pane>
    <a-tab-pane key="2" tab="安全性">
      <safe></safe>
    </a-tab-pane>
    <a-tab-pane key="3" tab="基础资源">
      <source-index></source-index>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import apm from './apm.vue';
  import safe from './safe.vue';
  import sourceIndex from './source-index.vue';
  export default defineComponent({
    setup() {
      return {
        activeKey: ref('1')
      };
    },
    components: { apm, safe, sourceIndex }
  });
</script>
