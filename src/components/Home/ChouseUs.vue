<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

// Detect if dark theme is active (Bootstrap theme)
const isDark = ref(false)
onMounted(() => {
  const currentTheme =
    document.documentElement.getAttribute('data-bs-theme') ||
    localStorage.getItem('theme') ||
    'light'
  isDark.value = currentTheme === 'dark'
})

// Dynamic Service Cards Data
const services = ref([
  {
    icon: 'bi bi-laptop',
    title: 'Responsive Web Development',
    desc: 'Crafting stunning, mobile-friendly websites that adapt flawlessly across all screen sizes for an exceptional user experience.',
    color: 'primary',
  },
  {
    icon: 'bi bi-lightning-charge',
    title: 'Single Page Applications (SPA)',
    desc: 'Delivering lightning-fast SPAs with Vue.js and Nuxt.js that offer smooth navigation and dynamic content updates.',
    color: 'info',
  },
  {
    icon: 'bi bi-diagram-3',
    title: 'State Management',
    desc: 'Implementing robust data flow using Pinia for predictable, scalable, and seamless app performance.',
    color: 'success',
  },
  {
    icon: 'bi bi-speedometer2',
    title: 'Frontend Optimization',
    desc: 'Optimizing code and assets with best practices to ensure maximum speed, SEO performance, and UX.',
    color: 'warning',
  },
  {
    icon: 'bi bi-cloud-check',
    title: 'Firebase Integration',
    desc: 'Connecting your app to Firebase for authentication, hosting, and real-time database — no server hassle.',
    color: 'danger',
  },
  {
    icon: 'bi bi-github',
    title: 'Version Control & Collaboration',
    desc: 'Using Git & GitHub for efficient teamwork, seamless versioning, and smooth CI/CD workflows.',
    color: 'secondary',
  },
  {
    icon: 'bi bi-layout-text-window-reverse',
    title: 'UI/UX Component Libraries',
    desc: 'Building reusable UI components and libraries that bring design consistency and development efficiency.',
    color: 'purple',
  },
])
</script>

<template>
  <section class="why-section py-5">
    <div class="container text-center">
      <h3 class="MainHeading fw-bold mb-4" data-aos="fade-down">Why Choose Us</h3>
      <p class="text-muted mb-5" data-aos="fade-up">
        We blend creativity, technology, and performance to deliver digital experiences that leave an impact.
      </p>

      <div class="row g-4 justify-content-center">
        <div
          v-for="(item, index) in services"
          :key="index"
          class="col-md-4"
          data-aos="zoom-in"
        >
          <div
            class="service-card h-100 shadow-sm"
            :class="{ 'bg-light text-dark': isDark }"
          >
            <div
              class="icon-wrapper mx-auto mb-4"
              :class="'bg-' + item.color + '-subtle text-' + item.color"
            >
              <i :class="item.icon + ' fs-2'"></i>
            </div>
            <h5 class="fw-bold mb-3 text-gradient">{{ item.title }}</h5>
            <p class="">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section */
.why-section {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.03), rgba(0, 0, 0, 0.02));
}

/* Title */
.MainHeading {
  font-size: 2rem;
  color: var(--Theme-Color, #0d6efd);
}

/* Card */
.service-card {
  border-radius: 20px;
  background: var(--bs-body-bg);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2rem 1.5rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: linear-gradient(120deg, rgba(13, 110, 253, 0.3), transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover::before {
  opacity: 1;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(13, 110, 253, 0.1);
}

/* Icon */
.icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s ease;
}
.service-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

/* Gradient Text */
.text-gradient {
  background: linear-gradient(90deg, #0d6efd, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Dark Mode Fix */
[data-bs-theme='dark'] .service-card {
  background-color: #ffffff !important;
  color: #000 !important;
  border-color: rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 767px) {
  .MainHeading {
    font-size: 1.6rem;
  }
  .service-card {
    padding: 1.5rem;
  }
}
</style>
