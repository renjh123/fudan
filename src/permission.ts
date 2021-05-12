// import router from '@/router/index'
// import store from '@/store/index'
// import asyncRouterJson from '@/router/asyncRouterJson'
// import asyncRouterMap from '@/router/asyncRouterMap'

// import LayoutPage from '@/layout/layout-page/index.vue'

// router.beforeEach((to, from, next) => {
//   // 如果当前页面在登陆页面就放行
//   if (to.path === '/login') {
//     next();
//   } else {
//     // 已登录，
//     // @ts-ignore
//     if (store.state.User.loginState == 'true') {

//       addDynamicRoutes()

//       next();
//     } else {
//       // 不在登陆页面并且未登录    则跳转到登陆页面
//       next({ path: '/login' });
//     }
//   }
// });


// function getDynamicRoutes(routerMap) {
//   const accessedRouters = routerMap.filter((route) => {
//     if (route.component) {
//       if (route.component == 'LayoutPage') {
//         route.component = LayoutPage
//       } else {
//         if (typeof route.component === 'string') {
//           route.component = require('@/views/' + route.component + '.vue').default;
//         }
//       }
//     }
//     if (route.children && route.children.length) {
//       route.children = getDynamicRoutes(route.children)
//     }
//     return true
//   })
//   return accessedRouters
// }

// function addDynamicRoutes() {
//   const addRouteMap = getDynamicRoutes(asyncRouterJson)
//   store.commit("SET_ROUTERMAP", [...asyncRouterMap,...addRouteMap])
//   addRouteMap.forEach(item => {
//     router.addRoute(item)
//   })
// }