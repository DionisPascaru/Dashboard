const Login = () => import('../Views/Auth/Login.vue');
const ForgotPassword = () => import('../Views/Auth/ForgotPassword.vue');
const ResetPassword = () => import('../Views/Auth/ResetPassword.vue');
const Register = () => import('../Views/Auth/Register.vue');
const Dashboard = () => import('../Views/Dashboard.vue');

export default [
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        name: 'forgot-password',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/reset-password/:token',
        props: route => ({
            token: route.params.token,
            email: route.query.email
        }),
        component: ResetPassword,
        name: 'reset-password',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/dashboard',
    }
];
