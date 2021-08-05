import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidatePlugin from './includes/validation';

const app = createApp(App).use(store).use(router).use(VeeValidatePlugin)

app.config.globalProperties.$BaseUrl = 'http://3.1.103.18/' 

app.mount('#app')
