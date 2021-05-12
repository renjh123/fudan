

const User: any = {
    state: {
        loginState: localStorage.getItem("loginState") ? localStorage.getItem("loginState") : '',
    },
    mutations: {
        SET_LOINGSTATE(state: any) {
            localStorage.setItem("loginState", "true")
        }
    },
    actions: {
    },
    modules: {
    }
}

export default User