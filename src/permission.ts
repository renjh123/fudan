import router from '@/router/index'
import store from '@/store/index'
import constantRouter from '@/router/constantRouter'
import { GetRouer } from '@/server/db_public'
import Layout from '@/layout/index.vue'


router.beforeEach((to, from, next) => {
    // 如果当前页面在登陆页面就放行
    if (to.path === '/login') {
        next();
    } else {
        // @ts-ignore
        console.log(typeof store.state.user.loginState)
        // @ts-ignore
        if (store.state.user.loginState) {
            // @ts-ignore
            addDynamicRoutes()
            // if(store.state.user.isRefresh){
            //     addDynamicRoutes()
            //     next({ ...to, replace: true });
            // }else {
            //     next()
            // }
            next()
        } else {
            // 不在登陆页面并且未登录    则跳转到登陆页面
            next({ path: '/login' });
        }
    }
});

// console.log(router)

function getDynamicRoutes(routerMap) {
    const accessedRouters = routerMap.filter((route) => {
        if (route.component) {
            if (route.component == 'Layout') {
                route.component = Layout
            } else {
                if (typeof route.component === 'string') {
                    route.component = require('@/views/' + route.component + '.vue').default;
                }
            }
        }
        if (route.children && route.children.length) {
            route.children = getDynamicRoutes(route.children)
        }
        return true
    })
    return accessedRouters
}

function addDynamicRoutes() {
    // @ts-ignore
    GetRouer().then(response => {
        // @ts-ignore
        const addRouteMap = getDynamicRoutes(response.data)
        const routerMap = constantRouter.concat(addRouteMap)
        store.commit("SET_ROUTERMAP", routerMap)
        store.commit("SET_REFRESH", false)
        addRouteMap.forEach(item => {
            router.addRoute(item)
        })
    })
}

