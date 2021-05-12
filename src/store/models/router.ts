const Router: any = {
    state: {
        RouterMap: []
    },
    mutations: {
        SET_ROUTERMAP(state: any, options: any) {
            state.RouterMap = []
            state.RouterMap = options
        }
    },
    actions: {
    },
    modules: {
    }
}

export default Router