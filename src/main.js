import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from "axios"


import { postRequest } from './axios/api'
import { getRequest } from './axios/api'
import { putRequest } from './axios/api'
import { deleteRequest } from './axios/api'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;

Vue.prototype.$http = axios.create({
    baseURL: "http://localhost:3001/api"
})

router.beforeEach((to, from, next) => {
    if (to.path === '/host') {
        const tokenStr = window.sessionStorage.getItem('tokenStr');
        if (tokenStr) {
            //判断用户信息是否存在
            if (!window.sessionStorage.getItem('user')) {
                return getRequest('/user/account').then(resp => {
                    if (resp) {
                        //存入用户信息
                        window.sessionStorage.setItem('user', JSON.stringify(resp));
                        next();
                    }
                })
            }
            next();
        } else {
            next('/loginblog')
        }
    } else {
        next();
    }
})



new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')