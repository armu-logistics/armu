import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Landingpage',
        component: () =>
            import ('@/views/Landingpage')
    },
    {
        path: '/forgot-password',
        name: 'Forgot-Password',
        component: () =>
            import ('@/Auth/ForgotPassword.vue')
    },
    {
        path: '/register/farmer',
        name: 'Farmer',
        component: () =>
            import ('@/Auth/FarmerRegistration.vue')
    },
    {
        path: '/register/buyer',
        name: 'Buyer',
        component: () =>
            import ('@/Auth/BuyerRegistration.vue')
    },

    {
        path: '/verification',
        name: 'Verification',
        component: () =>
            import ('@/Auth/Verification.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () =>
            import ('@/Auth/user.vue')
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('@/views/Dashboard')
    },
    {
        path: '/orders',
        name: 'Inventory',
        component: () =>
            import ('@/views/OrdersManagment')
    },
    {
        path: '/inventory',
        name: 'Inventory',
        component: () =>
            import ('@/views/InventoryManagment')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('@/views/Profile')
    },
    {
        path: '/invoice',
        name: 'Invoice',
        component: () =>
            import ('@/views/InvoiceManagment')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router