import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import store from './store/store'


import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin);


Vue.config.productionTip = false

axios.interceptors.request.use(async (config) => {
    config.baseURL = 'http://api.armulogistics.com/api';
    const token = localStorage.getItem('token');
    if(token) config.headers.common['x-access-token'] = token;
    return config;
});


new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')