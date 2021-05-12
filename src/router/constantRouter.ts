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
  ]
  export default constantRouter