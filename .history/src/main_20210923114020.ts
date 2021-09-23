import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/permission';
import './assets/css/index.css';
import * as echarts from 'echarts';

const AppBase = createApp(App);
AppBase.config.globalProperties.echarts = echarts;
AppBase.mount('#app');

createApp(App).use(store).use(router).use(Antd).mount('#app')

