import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/HomePage.vue';
import Test from '@/pages/TestPage.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/test', component: Test },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
