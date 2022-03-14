import { createRouter, createWebHistory } from "vue-router";

const routes = [ 
    {
        name: "index",
        path:"/", 
        componet: {template:'<div>Home</div>'}
    }, 
    {
        name: "Level-1",
        path:"/level-1/:id", 
        componet: () => import("../views/levels.vue")
    },
    {
        name: "Level 2",
        path:"/level 2", 
        componet: () => import("../views/level 2.vue")
    },
    {
        name: "Level 3",
        path:"/level 3", 
        componet: () => import("../views/level 3.vue")
    },
    {
        name: "Level 4",
        path:"/level 4", 
        componet: () => import("../views/level 4.vue")
    },
    {
        name: "Level 5",
        path:"/level 5", 
        componet: () => import("../views/level 5.vue")
    },
]

export default createRouter({
    history:createWebHistory(),
    routes
})