import { createStore } from 'vuex'
import User from './models/user'
import Router from './models/router'
export default createStore({
  modules: {
    User,
    Router
  }
})
