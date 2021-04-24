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
                redirect: { name: 'main' }
            },
            {
                path: 'main',
                name: 'main',
                component: pages.main
            }
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

let loader = null

function hideLoader() {
    if (loader) {
        loader.hide()
        loader = null
    }
}

function showLoader() {
    loader = Vue.$loading.show({
        loader: String(process.env.VUE_APP_LOADER_TYPE),
        opacity: Number(process.env.VUE_APP_LOADER_OPACITY),
        color: String(process.env.VUE_APP_LOADER_COLOR),
        blur: String(process.env.VUE_APP_LOADER_BLUR)
    })
    return true
}

router.beforeEach((to, from, next) => {
    return next()
})

router.afterEach(() => {
    //hideLoader()
})

Vue.prototype.router = router
window.router = router
export default router
