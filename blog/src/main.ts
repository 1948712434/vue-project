import { createApp } from 'vue'
import App from './App.vue'

//router
import router from './router'

// Naive UI 的通用字体
import 'vfonts/Lato.css'

const app = createApp(App);

// app使用element
app.use(router);

app.mount('#app');
