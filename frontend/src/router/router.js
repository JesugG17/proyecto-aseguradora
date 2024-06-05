import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import CreditCard from '../pages/CreditCard.vue';
import PackageDetails from '../pages/PackageDetails.vue';
import RegisterCarInfo from '../pages/RegisterCarInfo.vue'
const routes = [
  { path: '/', component: HomePage },
  { path: '/package-details/:id', component: PackageDetails },
  { path: '/payment', component: CreditCard },
  {path: '/register-car-info/:pack', component: RegisterCarInfo}
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});