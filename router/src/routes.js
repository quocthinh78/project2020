import Vue from 'vue'
import VueRouter from 'vue-router'
import lodash from 'lodash';
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

Vue.use(VueRouter)
export const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/register',
            name: 'register',
            component: () =>
                import ( /* webpackChunkName: "Register" */ "./components/Register"),
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "Login" */ "./components/Login"),
            props: { name: 'aaa' },
        },
    ]
})