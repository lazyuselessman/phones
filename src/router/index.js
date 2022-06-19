import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import LogoutPage from '@/views/LogoutPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import AddPage from '@/views/AddPage.vue'
import DeletePage from '@/views/DeletePage.vue'
import EditPage from '@/views/EditPage.vue'

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
  },
  {
    path: "/add",
    name: "add",
    component: AddPage,
  },
  {
    path: "/delete",
    name: "delete",
    component: DeletePage,
    props: true // important to allow receiving props in Edit component
  },
  {
    path: "/edit",
    name: "edit",
    component: EditPage,
    props: true // important to allow receiving props in Edit component
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
