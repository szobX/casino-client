import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router'
import Test from '../components/Test.vue'
import Roulette from '../pages/Roulette.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/test',
        component: Test,
    },
    {
        path: '/ruleta',
        component: Roulette,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
