import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import router from './router'
import moment from 'moment';

const app = createApp(App);
app.config.globalProperties.$moment = moment;

app.use(router);
app.mount('#app');