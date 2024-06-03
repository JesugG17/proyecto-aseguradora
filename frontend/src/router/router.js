import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import PackageDetails from '../pages/PackageDetails.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/package-details', component: PackageDetails }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});