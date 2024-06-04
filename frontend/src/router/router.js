import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import PackageDetails from '../pages/PackageDetails.vue';
import RegisterCarInfo from '../pages/RegisterCarInfo.vue'
const routes = [
  { path: '/', component: HomePage },
  { path: '/package-details/:id', component: PackageDetails },
  {path: '/register-car-info', component: RegisterCarInfo}
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});