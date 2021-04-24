import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from './pages'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: pages.layoutIndex,
        children: [
            {
                path: '',
                name: 'main',
                component: pages.main
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
    linkExactActiveClass: 'router-link',
    linkActiveClass: 'is-active'
})

Vue.prototype.router = router
window.router = router
export default router
