<template>
  <div class="pie" id="mycharts" ref="myRef"></div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'pie',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
