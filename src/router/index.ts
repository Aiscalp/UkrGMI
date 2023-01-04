import ArticlesList from "@/components/ArticlesList.vue";
import MapMarkers from "@/components/MapMarkers.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: ArticlesList,
    meta: {
      title: "Articles",
    },
  },
  {
    path: "/map",
    component: MapMarkers,
    meta: {
      title: "Map",
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
