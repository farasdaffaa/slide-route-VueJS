import { createRouter, createWebHistory } from "vue-router";

import homePage from "../views/Home.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: homePage,
        },

        {
            path: "/home",
            redirect: "/",
        },

        {
            path: "/products/:id",
            name: "product",
            component: () => import("../views/Product.vue"),
            children: [
                {
                    path: "owner",
                    name: "owner",
                    component: () => import("../views/Owner.vue"),
                },
            ],
        },

        {
            path: "/about",
            name: "about",
            component: () => import("../views/About.vue")
        },

        {
            path: "/:catchall(.*)*",
            name: "404",
            component: () => import("../views/error/404.vue")
        },
    ],
});

export default router;