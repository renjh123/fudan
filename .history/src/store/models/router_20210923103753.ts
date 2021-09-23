const router: any = {
    state: {
        RouterMap: []
    },
    mutations: {
        SET_ROUTERMAP(state: any, options: any) {
            console.log(options,1231)
            state.RouterMap = options
        }
    },
    actions: {
    },
    modules: {
    }
}

export default router