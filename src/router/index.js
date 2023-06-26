import { createRouter, createWebHistory } from 'vue-router'

import HomeStudent from '../views/studentpage/HomeStudent.vue'
import Learn from '../views/studentpage/Learn.vue'
import Test from '../views/studentpage/Test.vue'
import Practice from '../views/studentpage/Practice.vue'
import HomeTeacher from '../views/teacherpage/HomeTeacher.vue'
import Evaluation from '../views/teacherpage/Evaluation.vue'
import Grade from '../views/teacherpage/Grade.vue'
import Classes from '../views/teacherpage/Classes.vue'


const routes = [
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/student/home',
    name: 'HomeStudent',
    component: HomeStudent
  },
  {
    path: '/student/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/student/practice',
    name: 'Practice',
    component: Practice
  },
  {
    path: '/student/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/teacher/home',
    name: 'HomeTeacher',
    component: HomeTeacher
  },
  {
    path: '/teacher/class',
    name: 'Classes',
    component: Classes
  },
  {
    path: '/teacher/grades',
    name: 'Grade',
    component: Grade
  },
  {
    path: '/teacher/evaluation',
    name: 'Evaluation',
    component: Evaluation
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
