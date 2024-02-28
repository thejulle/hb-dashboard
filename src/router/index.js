// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import DoctorsView from "../views/DoctorsView.vue";
import DoctorsSettings from "../views/DoctorsSettings.vue";
import PatientsView from "../views/PatientsView.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        {
          path: '',
          component: DoctorsView,
        },
        {
          path: '/patient/:activePatientId',
          component: DoctorsView,
          name: 'doctors-view',
        },
      ]
    },
    {
      path: "/doctors-settings",
      component: DoctorsSettings,
      name: 'doctors-settings',
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
