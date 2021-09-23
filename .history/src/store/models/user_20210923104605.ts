

const user: any = {
    state: {
        loginState: localStorage.getItem("loginState")?JSON.parse(localStorage.getItem("loginState")):null,
        userInfo: localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,
        isRefresh: localStorage.getItem("isRefresh")?JSON.parse(localStorage.getItem("isRefresh")):true,        
    },
    mutations: {
        SET_LOINGSTATE(state, options) {
            // state.loginState = options
            console.log(this.loginState,111111111)
            localStorage.setItem("loginState",options)
        },
        SET_USERINFO(state, options) {
            console.log(options)
            localStorage.setItem("userInfo",JSON.stringify(options))
            // state.userInfo.username = options.username
            // state.userInfo.password = options.password
        },
        SET_REFRESH(state, options) {
            // state.isRefresh = options
            localStorage.setItem("isRefresh",options)
        }
    },
    actions: {
    },
    modules: {
    }
}

export default user