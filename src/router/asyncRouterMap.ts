import Layout from '@/layout/index.vue'
import LayoutPage from '@/layout/layout-page/index.vue'

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
export const asyncRouterMap = [

    {
        path: '/',
        name: 'dashboard',
        component: Layout,
        redirect: '/dashboard/analysis',
        meta: { title: '首页', hidden: true },
        children: [
            // 首页
            {
                path: '/dashboard/analysis',
                name: 'analysis',
                component: () => import('@/views/dashboard/analysis.vue'),
                meta: { title: '首页', hidden: true },

            },
            // 控制台
            {
                path: '/consoleDesk/UserManagement',
                name: 'UserManagement',
                component: LayoutPage,
                meta: { title: '控制台', hidden: true },
                children: [
                    {
                        path: '/consoleDesk/UserManagement',
                        name: 'UserManagement',
                        component: () => import('@/views/consoleDesk/UserManagement.vue'),
                        meta: { title: '用户管理', hidden: true },
                    },
                    {
                        path: '/consoleDesk/MenuManagement',
                        name: 'MenuManagement',
                        component: () => import('@/views/consoleDesk/MenuManagement.vue'),
                        meta: { title: '菜单管理', hidden: true },
                    },
                    {
                        path: '/consoleDesk/AuthorityManagement',
                        name: 'AuthorityManagement',
                        component: () => import('@/views/consoleDesk/AuthorityManagement.vue'),
                        meta: { title: '权限管理', hidden: false },
                    },
                ]
            },
        ]
    },
]

export default asyncRouterMap