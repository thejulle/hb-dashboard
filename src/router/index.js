// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import DoctorsView from "../views/DoctorsView.vue";
import PatientsView from "../views/PatientsView.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DoctorsView,
      name: 'doctors-view',
    },
    {
      path: "/patient/:activePatientId",
      component: DoctorsView,
      name: 'doctors-view',
    },
    {
      path: "/patients-view",
      component: PatientsView,
      name: 'patients-view',
    },
    {
      path: "/login",
      component: Login,
      name: 'login',
    },
  ],
});

export default router;
