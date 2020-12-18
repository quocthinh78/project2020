import Vue from 'vue'
import VueRouter from 'vue-router'
// const { isNavigationFailure, NavigationFailureType } = VueRouter 
import About from './components/About.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact'
import Service from './components/Service.vue'
import ContactFoo from './components/ContactFoo.vue'
import NotFound from './components/NotFound'
import Test from './components/Test'
import User from './components/User'
import lodash from 'lodash';
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });
// import DashBoard from './components/DashBoard'
// import UserLogin from './components/UserLogin'



Vue.use(VueRouter)
    // import store from "@/store.js";
export const router = new VueRouter({
    mode: 'history',
    // scrollBehavior(to, from, savePosition) {
    //     console.log(savePosition);
    //     if (savePosition) {
    //         return savePosition
    //     } else {
    //         const position = {};
    //         if (to.hash) {
    //             position.selector = to.hash;
    //             return false;
    //         }
    //     }
    // },
    routes: [{
            path: '/',
            name: "home",
            component: () =>
                import ("@/components/Home.vue"),
        },
        {
            path: '*',
            component: NotFound,
        },
        {
            path: '/text-*',
            component: Test,
        },
        {
            path: '/about',
            name: "about",
            alias: '/b',
            component: About,
            children: [{
                path: 'id',
                components: {
                    default: Contact,
                    a: Home,
                    b: Home
                },
                children: [{
                    path: 'cid',
                    components: {
                        default: Service,
                        d: NotFound,
                    },
                }]
            }]
        },
        {
            path: '/contact',
            name: "contact",
            alias: '/a',
            component: Contact,
            beforeEnter: (to, from, next) => {
                console.log("from", from);
                console.log("to", to);
                next();
                // if (from.name == "contact") {
                switch (from.name) {
                    case "user":
                        next();
                        break;
                    case "service":
                        next({ path: "/" });
                        break;
                        // default:
                        //     next({ path: "/contact" });
                        //     break;
                }
                //     //     // } else if (from.name != "contact") {
                //     //     //     switch (to.name) {
                //     //     //         case "user":
                //     //     //             next({ path: "/user/1/aa/3" });
                //     //     //             break;
                //     //     //         case "service":
                //     //     //             next({ path: "/contact" });
                //     //     //             break;
                //     //     //     }
                //     // }
            },
            // beforeRouteEnter(to, from, next) {
            //     console.log("from" , from);
            //     console.log("to" ,  to);
            // },
            children: [{
                path: 'foo',
                component: ContactFoo,
            }],
            // meta: { requiresAuth: true }
        },
        {
            path: '/user/:userId/aa/:id',
            name: 'user',
            component: User,
            props: { name: 'aaa' },
            // meta: { requiresAuth: true }
            // props: route => ({ query: route.query.q })
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ( /* webpackChunkName: "Register" */ "./components/Register"),

            // props: route => ({ query: route.query.q })
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "Login" */ "./components/Login"),
            props: { name: 'aaa' },

            // props: route => ({ query: route.query.q })
        },
        {
            path: '/users',
            name: 'users',
            component: () =>
                import ( /* webpackChunkName: "users" */ "@/components/logOut"),
            props: { name: 'aaa' },
            meta: { requiresAuth: true },
            beforeEnter: checkLogin
        },
        {
            path: '/service',
            name: "service",
            component: Service,
            meta: { requiresAuth: true },
            beforeEnter: checkLogin

        },
    ]
})


router.beforeEach((to, from, next) => {
    next();
});

function checkLogin(to, from, next) {
    var email = localStorage.getItem("email");
    var pass = localStorage.getItem("password");
    if (email && pass) {
        next();
    } else {
        next({ path: '/login' });
    }

}
// router.beforeEach((to, from, next) => {
//     console.log(to);
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.user && store.password) {
//             next();
//         } else {
//             next({ path: "/login" });
//         }
//     } else {
//         next();
//     }
// });