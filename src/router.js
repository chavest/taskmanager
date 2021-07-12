import { createRouter , createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Taskindex from './pages/Task.vue'
const routes = [
    { name:"home", path:'/', component:Home },
    { name:"task", path:'/task', component:Taskindex }
];
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;