const asyncRouterJson = [

    // 控制台
    {
        path: '/consoleDesk/UserManagement',
        name: 'UserManagement',
        component: 'Layout',
        meta: { title: '控制台', hidden: true },
        children: [
            {
                path: '/consoleDesk/UserManagement',
                name: 'UserManagement',
                component: "consoleDesk/UserManagement",
                meta: { title: '用户管理', hidden: true },
            },
            {
                path: '/consoleDesk/MenuManagement',
                name: 'MenuManagement',
                component: "consoleDesk/MenuManagement",
                meta: { title: '菜单管理', hidden: true },
            },
            {
                path: '/consoleDesk/AuthorityManagement',
                name: 'AuthorityManagement',
                component: "consoleDesk/AuthorityManagement",
                meta: { title: '权限管理', hidden: true },
            },
        ]
    },
]

export default asyncRouterJson