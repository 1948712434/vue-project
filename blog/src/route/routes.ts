import home from '../components/home.vue'

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  }
]

export default routes