import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import teste from '../views/teste.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{title: "Pagina home"}
  },
  {
    path: '/OqueSou',
    name: 'OqueSou',
    component: () => import(/* webpackChunkName: "about" */ '../views/OqueSou.vue')
  ,meta:{title: "Pagina O que Sou"}
  },
  {
    path: '/teste',
    name: 'teste',
    component: () => import('../views/teste.vue')
    ,meta:{title: "Pagina O que Faco"}
  },
  {
    path: '/Hobbies',
    name: 'Hobbies',
    component: () => import('../views/Hobbies.vue')
    ,meta:{title: "Hobbies"}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//router.beforeEach((to,from,next) => {
  //if(to.path.startsWith("/teste")){
  //  next('/teste')
    
  //}else{next()}
//})

router.afterEach((to) => {
  document.title= to.meta.title
})

export default router
