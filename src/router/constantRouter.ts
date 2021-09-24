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
  //   {
  //     path: '/',
  //     name: 'dashboard',
  //     component: Layout,
  //     redirect: '/dashboard/analysis',
  //     meta: { title: '首页', hidden: true },
  //     children: [
  //         // 首页
  //         {
  //             path: '/dashboard/analysis',
  //             name: 'analysis',
  //             component: () => import('@/views/dashboard/analysis.vue'),
  //             meta: { title: '首页', hidden: true },

  //         },
  //     ]
  // },
 

  {
    component: Layout,
    path: '/',
    redirect: '/dashboard/analysis',
    children: [
        {
          path: '/dashboard/analysis',
          name: 'analysis',
          component: () => import('@/views/dashboard/analysis.vue'),
          meta: { title: '首页', hidden: true }
        },
        {
          path: '/assessment',
          name: 'assess',
          meta: { title: '应用健康度评估', hidden: true, alwaysShow:false },
          component: () => import('@/views/assessment/list.vue'),
        }
    ]
},
  ]
  export default constantRouter