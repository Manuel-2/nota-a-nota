import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue'
import HomeView from '@/views/HomeView.vue'
import NotesView from '@/views/NotesView.vue'
import ExercisesDisplayView from '@/views/ExercisesDisplayView.vue'
import PentagramView from "@/views/PentagramView.vue"

const routes = [
  {
    path: '/nota-a-nota',
    name: 'LandingPage',
    component: LandingPageView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/las-notas',
    name: "notes",
    component: NotesView
  },
  {
    path: '/ejercicios',
    name: "exercises",
    component: ExercisesDisplayView
  },
  {
    path: "/el-pentagrama",
    name: "pentagrama",
    component: PentagramView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
