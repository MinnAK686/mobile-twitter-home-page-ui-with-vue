import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
            mainMenu: true,
            iconClass: "fa-solid fa-home",
        },
        {
            path: "/explore",
            name: "Explore",
            component: HomeView,
            mainMenu: true,
            iconClass: "fa-solid fa-search",
        },
        {
            path: "/notifications",
            name: "Notifications",
            component: HomeView,
            mainMenu: true,
            iconClass: "fa-solid fa-bell",
        },
        {
            path: "/messages",
            name: "Messages",
            component: HomeView,
            mainMenu: true,
            iconClass: "fa-solid fa-envelope",
        },
        {
            path: "/profile",
            name: "Profile",
            component: HomeView,
            mainMenu: false,
            iconClass: "fa-solid fa-user",
        },
    ],
});

export default router;
