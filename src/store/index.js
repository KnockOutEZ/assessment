import { createStore } from 'vuex'

export default createStore({
  state: {
    authModalShow: false,
    // isAuthenticated: localStorage.Authenticator=='true',
    isAuthenticated: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
      console.log(state.authModalShow);
    },
    toggleAuthenticated(state){
      localStorage.Authenticator = !state.isAuthenticated
      state.isAuthenticated = !state.isAuthenticated
    }
  },
  actions: {
  },
  modules: {
  }
})
