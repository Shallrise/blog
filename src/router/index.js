import Vue from 'vue'
import VueRouter from 'vue-router'
import Host from '../components/Host.vue'
import Listarticle from '../components/ListArticlee'
import Createarticle from '../components/CreateArticlee'
import Editarticle from '../components/ModifyAriticle'
import Loginmu from '../components/Loginmu'
import Home from '../components/Home'
import Message from '../components/Message.vue'
import Change from '../components/Change.vue'
Vue.use(VueRouter)
    //获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
    //修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [{
        path: '/host',
        name: 'Host',
        component: Host,
        children: [
            { path: '/article/create', name: 'CreateArticle', component: Createarticle },
            { path: '/article/index', name: 'ListArticle', component: Listarticle },
            { path: '/article/edit/:id', name: 'EditArticle', component: Editarticle }
        ]
    },
    { path: '/loginmu', name: 'Loginmu', component: Loginmu },
    { path: '/home', name: 'Home', component: Home },
    { path: '/message', name: 'Message', component: Message },
    { path: '/change', component: Change }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router