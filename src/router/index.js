// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import DoctorsView from "../views/DoctorsView.vue";
import PatientsView from "../views/PatientsView.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DoctorsView,
    },
    {
      path: "/patient/:activePatientId",
      component: DoctorsView,
    },
    {
      path: "/patients-view",
      component: PatientsView,
    },
  ],
});

export default router;
