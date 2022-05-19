import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';
import HotelPage from './components/HotelPage.vue';
import AddPage from './components/AddPage.vue';
import UpdatePage from './components/UpdatePage.vue';
import ForgetPassword from './components/ForgetPassword.vue';
import ResetPassword from './components/ResetPassword.vue';
import {createRouter,createWebHistory} from 'vue-router';

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'HotelPage',
        component: HotelPage,
        path: '/hotel'
    },
    {
        name: 'AddPage',
        component: AddPage,
        path: '/add'
    },
    {
        name: 'UpdatePage',
        component: UpdatePage,
        path: '/update/:id',
    },
    {
        name: 'ForgetPassword',
        component: ForgetPassword,
        path: '/forgetpwd',
    },
    {
        name: 'ResetPassword',
        component: ResetPassword,
        path: '/resetpwd',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
