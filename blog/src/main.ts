import { createApp } from 'vue'
import App from './App.vue'

//路由
import router from './route'

//状态管理器
import store from './store'

const app = createApp(App);
app.use(router).use(store);
app.mount('#app')
