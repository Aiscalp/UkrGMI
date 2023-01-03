import ArticlesList from "@/components/ArticlesList.vue";
// import MapMarkers from "@/components/MapMarkers.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: ArticlesList,
  },
  // {
  //   path: "/map",
  //   component: MapMarkers,
  // },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
