import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: {
                name: 'installation',
            },
        },
        {
            path: '/theme-custom',
            name: 'theme-custom',
            component: () => import('../views/ThemeCustom'),
        },
        {
            path: '/change-log',
            name: '/change-log',
            component: () => import('../views/ChangeLog'),
        },
        {
            path: '/installation',
            name: 'installation',
            component: () => import('../views/Installation'),
        },
        {
            path: '/components/button',
            name: 'button',
            component: () => import('../views/components/commmon/VButtonDemo'),
        },
        {
            path: '/components/icon',
            name: 'icon',
            component: () => import('../views/components/commmon/Icon'),
        },
        {
            path: '/components/grid',
            name: 'grid',
            component: () => import('../views/components/layout/VGridDemo'),
        },
    ],
});
