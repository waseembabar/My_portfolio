import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView/Home.vue';
import AboutUsView from '../components/Home/Aboutus.vue';
import ServiceView from '../components/Home/Service.vue';
import PortfolioView from '../components/Home/Portfolio.vue';
import TestimonialView from '../components/Home/Testimonial.vue';
import ContactUsView from '../components/Home/ContactUs.vue';

let portfolioScrollPosition = 0;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/HomeView/Home.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/testimonial',
      name: 'testimonial',
      component: TestimonialView
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUsView
    },
    {
      path: '/aiuserside',
      name: 'aiuserside',
      component: () => import('../components/Projects/AiVoice/AiVoice.vue')
    },
    {
      path: '/userpanel',
      name: 'ai_user_admin',
      component: () => import('../components/Projects/AIUserDashboard/AIUserDashboard.vue')
    },
    {
      path: '/adminpanel',
      name: 'ai_admin',
      component: () => import('../components/Projects/AiAdminPanel/AiAdminPanel.vue')
    },
    {
      path: '/DunBradstreet',
      name: 'DunBradstreet',
      component: () => import('../components/Projects/DunBradstreet/DunBradstreet.vue')
    },
    {
      path: '/rms',
      name: 'rms',
      component: () => import('../components/Projects/RailwayManagment/RailwayManagment.vue')
    },
    {
      path: '/formToform',
      name: 'formToform',
      component: () => import('../components/Projects/FormToForm/formToForm.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../components/resume.vue')
    },
    {
      path: '/FarmnCho',
      name: 'FarmnCho',
      component: () => import('../components/Projects/Farmncho/Farmncho.vue')
    },
    {
      path: '/publishjob',
      name: 'publishjob',
      component: () => import('../components/Projects/publishjobs/publishjobs.vue')
    },
    {
      path: '/FarmnCho',
      name: 'FarmnCho',
      component: () => import('../components/Projects/Farmncho/Farmncho.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else if (to.name === 'home' && from.name !== 'home') {
      // Scroll to Portfolio section if coming back to Home from other pages
      return { el: '#project', top: portfolioScrollPosition, behavior: 'smooth' };
    } else {
      return { left: 0, top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  // Capture Portfolio section scroll position before leaving the home page
  if (from.name === 'home' && document.querySelector('#project')) {
    portfolioScrollPosition = document.querySelector('#project').getBoundingClientRect().top;
  }
  next();
});

export default router;
