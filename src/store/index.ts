import { createStore } from 'vuex'
import user from './models/user'
import router from './models/router'
export default createStore({
  modules: {
    user,
    router
  }
})
