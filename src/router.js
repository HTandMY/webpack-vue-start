import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: {title: ''}
        }
    ]
});


export default router;