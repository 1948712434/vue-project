import { createApp } from 'vue'
import App from './App.vue'

//路由
import router from './route/index'


const app = createApp(App);
app.use(router)
app.mount('#app')
