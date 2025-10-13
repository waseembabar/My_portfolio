import './assets/main.css';

// ✅ Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

// ✅ Global Components
import Navbar from './components/GlobalComponent/Header.vue';
import Footer from './components/GlobalComponent/Footer.vue';

// ✅ Animation Library (AOS)
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// ✅ Vue Core
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 🌗 === Theme Handling (Dark/Light Mode) ===
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.toggle('dark', savedTheme === 'dark');

// ✅ Create Vue App
const app = createApp(App);

// ✅ Global Components Registration
app.component('Navbar', Navbar);
app.component('Footer', Footer);

// ✅ Plugins
app.use(createPinia());
app.use(router);

// ✅ Initialize AOS
AOS.init();

// ✅ Mount App
app.mount('#app');
