

const user: any = {
    state: {
        loginState: null,
        userInfo: {
            username: '',
            password: '',
        }
    },
    mutations: {
        SET_LOINGSTATE(state, options) {
            state.loginState = options
        },
        SET_USERINFO(state, options) {
            console.log(options)
            state.userInfo.username = options.username
            state.userInfo.password = options.password
        }
    },
    actions: {
    },
    modules: {
    }
}

export default user