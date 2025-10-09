import './assets/main.css';

// boostrap Import link 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// boostrap Import link End
// bootstrap icons 
import 'bootstrap-icons/font/bootstrap-icons.css';





import Navbar from'./components/GlobalComponent/Header.vue';
import Footer from './components/GlobalComponent/Footer.vue';



import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
 

// animation Libraray 

const app = createApp(App)
app.component('Navbar',Navbar)
app.component('Footer',Footer)
app.use(createPinia())
AOS.init();
app.use(router)

app.mount('#app')
