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
        path: '/verifySignUp/:id',
        name: 'Verified',
        component: () =>
            import ('@/Auth/Verified.vue')
    },
     {
    path: '/error',
    name: 'ServerError',
    component: () => import('@/views/errors/Error50x'),
  },
  {
    path: '/no-internet',
    name: 'NoInternet',
    component: () => import('@/views/errors/Connection'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/errors/Error404'),
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
        path: '/buyer',
        name: 'Buyer',
        component: () =>
            import ('@/views/BuyersManagment')
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