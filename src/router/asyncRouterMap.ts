import Layout from '@/layout/index.vue'
import LayoutPage from '@/layout/layout-page/index.vue'

/**
 * 
 * 
 */
export const asyncRouterMap = [

    {
        path: '/',
        name: 'dashboard',
        component: Layout,
        redirect: '/dashboard/analysis',
        meta: { title: '首页', disable: true },
        children: [
            // 首页
            {
                path: '/dashboard/analysis',
                name: 'analysis',
                component: () => import('@/views/dashboard/analysis.vue'),
                meta: { title: '首页', disable: true },

            },
            // 控制台
            {
                path: '/consoleDesk/UserManagement',
                name: 'UserManagement',
                component: LayoutPage,
                meta: { title: '控制台', disable: true },
                children: [
                    {
                        path: '/consoleDesk/UserManagement',
                        name: 'UserManagement',
                        component: () => import('@/views/consoleDesk/UserManagement.vue'),
                        meta: { title: '用户管理', disable: true },
                    },
                    {
                        path: '/consoleDesk/MenuManagement',
                        name: 'MenuManagement',
                        component: () => import('@/views/consoleDesk/MenuManagement.vue'),
                        meta: { title: '菜单管理', disable: true },
                    },
                    {
                        path: '/consoleDesk/AuthorityManagement',
                        name: 'AuthorityManagement',
                        component: () => import('@/views/consoleDesk/AuthorityManagement.vue'),
                        meta: { title: '权限管理', disable: true },
                    },
                ]
            },
        ]
    },
]

export default asyncRouterMap