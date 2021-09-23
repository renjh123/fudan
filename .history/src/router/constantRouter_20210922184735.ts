import Layout from '@/layout/index.vue'

/**
 * redirect: 重定向地址
 * 
 * meta:{
 *      hidden: 菜单是否显示 true 显示 false 不显示
 *      sort: 排序
 *      icon: 图标
 *      title: 标题
 *      path：路由外链
 *      children：子路由
 *      
 * }
 * 
 */

const constantRouter= [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue'),
      meta: {
        title: "登陆",
        disable: false,
      }
    },
    {
      path: '/',
      name: 'dashboard',
      component: Layout,
      redirect: '/dashboard/analysis',
      meta: { title: '首页', hidden: true },
      component: () => import('@/views/dashboard/analysis.vue'),
  },
  ]
  export default constantRouter