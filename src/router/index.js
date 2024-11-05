import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue';
import Lab1PY00011 from '../components/lab1.vue';
import Lab2Bai1 from '../components/Lab2/bai1.vue';
import Lab2Bai2 from '../components/Lab2/bai2.vue';
import Lab2Bai3 from '../components/Lab2/bai3.vue';
import Lab2Bai4 from '../components/Lab2/bai4.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/lab2/bai1', component: Lab2Bai1 },
    { path: '/lab2/bai2', component: Lab2Bai2 },
    { path: '/lab2/bai3', component: Lab2Bai3 },
    { path: '/lab2/bai4', component: Lab2Bai4 },
    {path: '/lab1', component: Lab1PY00011}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;