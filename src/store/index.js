import { createStore } from 'vuex'
// import axios from 'axios';

export default createStore({
  state: {
    authModalShow: false,
    isAuthenticated: localStorage.Authenticator=='true',
    // isAuthenticated: false,
    // url:'http://3.1.103.18/products',
    // productss:[]
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;

    },
    toggleAuthenticated(state){
      localStorage.Authenticator = !state.isAuthenticated
      state.isAuthenticated = !state.isAuthenticated
    },
    // getproductss(state){
    //   axios.get(state.url).then(data=>{
    //     this.productss = data.quantity
    //     console.log(data.quantity)
    //   })
    // }
  },
  actions: {
  },
  modules: {
  }
})
