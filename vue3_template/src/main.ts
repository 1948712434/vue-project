import { createApp } from 'vue'
import App from './App.vue'

//router
import router from './router'

// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//polyfill
import "@babel/polyfill";

const app = createApp(App);

// app使用element
app.use(ElementPlus).use(router);

app.mount('#app');
