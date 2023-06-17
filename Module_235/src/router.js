import { createrouter, createWebHistory } from 'vue-router';

const router = createrouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: null },
        {
            path: '/coaches/:id',
            component: null,
            children: [
                { path: 'contact', component: null }, // /coaches/c1/contact
            ],
        },
        { path: '/register', component: null },
        { path: '/requests', component: null },
        { path: '/:notFound(.*)', component: null },
    ],
});

export default router;
