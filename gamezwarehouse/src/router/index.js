import { createRouter, createWebHistory } from "vue-router";
import mainContent from "@/components/MainContent.vue";

const routes = [
    {
        name: "mainContent",
        path: "/",
        component: mainContent,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;