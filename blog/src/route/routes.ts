import home from '@/pages/home.vue'
import about from '@/pages/about.vue'
import login from '@/pages/login/login.vue'

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/about",
    name: "about",
    component: about
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
]

export default routes