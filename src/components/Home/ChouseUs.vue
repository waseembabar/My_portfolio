<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

// Detect Bootstrap theme
const isDark = ref(false)
onMounted(() => {
  const currentTheme =
    document.documentElement.getAttribute('data-bs-theme') ||
    localStorage.getItem('theme') ||
    'light'
  isDark.value = currentTheme === 'dark'
})

// Your OLD SERVICES DATA (unchanged)
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
      <h3 class="MainHeading fw-bold mb-4" data-aos="fade-down">
        Why Choose Us
      </h3>

      <p class="text-muted mb-5" data-aos="fade-up">
        We blend creativity, technology, and performance to deliver digital experiences that leave an impact.
      </p>

      <div class="row g-4 justify-content-center">
        <div
          v-for="(item, index) in services"
          :key="index"
          class="col-md-3 col-sm-6"
          data-aos="fade-up"
        >
          <div class="feature-box h-100">
            <div class="icon-circle mb-3" :class="'text-' + item.color">
              <i :class="item.icon + ' fs-3'"></i>
            </div>

            <h5 class="fw-bold">{{ item.title }}</h5>

            <p class="text-muted small mt-2">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Background */
.why-section {
  background: var(--bs-body-bg);
}

/* Title */
.MainHeading {
  font-size: 2rem;
  color: var(--Theme-Color, #0d6efd);
}

/* Feature Box — NOT a card (like your screenshot) */
.feature-box {
  padding: 1.6rem;
  text-align: left;
  border-radius: 14px;
  background: #111;
  border: 1px solid #1b1b1b;
  transition: 0.3s ease;
  cursor: pointer;
}

.feature-box:hover {
  border-color: #3b3bff;
  box-shadow: 0 0 0 3px rgba(59, 59, 255, 0.3);
}

/* Light Mode */
[data-bs-theme='light'] .feature-box {
  background: #f8f9fa;
  border-color: #e1e1e1;
}

[data-bs-theme='light'] .feature-box:hover {
  border-color: #0d6efd;
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.25);
}

/* Icon Circle */
.icon-circle {
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}

.feature-box:hover .icon-circle {
  transform: scale(1.1) rotate(5deg);
}

/* Light mode icon background */
[data-bs-theme='light'] .icon-circle {
  background: rgba(0, 0, 0, 0.06);
}

/* Responsive */
@media (max-width: 767px) {
  .MainHeading {
    font-size: 1.6rem;
  }
}
</style>
