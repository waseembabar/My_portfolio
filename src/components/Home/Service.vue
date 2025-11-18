<template>
  <div class="container-fluid why-section">
    <!-- Service Section -->
  
    <!-- Skills Section -->
    <div class="skills-section ">
      <h4 class="MainHeading text-center mb-3">Skills</h4>
      <p class="SmallText text-center skill-desc">
        A web development expert skilled in
        <span class="highlight">modern front-end tools</span> and
        <span class="highlight">cutting-edge frameworks</span> —
        transforming ideas into stunning, fast, and responsive digital experiences.
      </p>

      <div class="container">
        <div class="row justify-content-center g-4 mt-4">
          <div
            v-for="(logo, i) in skillLogos"
            :key="i"
            class="col-4 col-sm-3 col-md-2 d-flex justify-content-center"
            data-aos="zoom-in"
          >
            <div class="skill-card text-center">
              <img :src="logo" alt="Skill logo" class="skill-image img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({ duration: 600 });
});

// Services
const services = [
  {
    icon: "bi bi-code-slash",
    title: "Custom Vue.js Development",
    desc: "Building high-quality, scalable, and fully responsive Vue applications.",
  },
  {
    icon: "bi bi-layers",
    title: "Nuxt.js Website & SPA",
    desc: "Fast SSR/SPA websites with routing, SEO, and optimized performance.",
  },
  {
    icon: "bi bi-plug",
    title: "API Integration",
    desc: "REST API, Firebase, authentication, and dynamic data handling.",
  },
  {
    icon: "bi bi-window-desktop",
    title: "Responsive UI/UX",
    desc: "Pixel-perfect UI using Tailwind, Bootstrap, SASS, and animations.",
  },
  {
    icon: "bi bi-speedometer2",
    title: "Optimization & SEO",
    desc: "Improving speed, Lighthouse score, SEO ranking, and best performance.",
  },
  {
    icon: "bi bi-bug",
    title: "Bug Fixing & Improvements",
    desc: "Fixing broken UI, layout issues, console errors, and code refactoring.",
  },
];

// Skill Logos
const skillLogos = [
  new URL("@/assets/Sklls/HTML.png", import.meta.url).href,
  new URL("@/assets/Sklls/pngwing.com.png", import.meta.url).href,
  new URL("@/assets/Sklls/SASS.png", import.meta.url).href,
  new URL("@/assets/Sklls/Tailwind.png", import.meta.url).href,
  new URL("@/assets/Sklls/Bootstrap.png", import.meta.url).href,
  new URL("@/assets/Sklls/GSAP.webp", import.meta.url).href,
  new URL("@/assets/Sklls/AOS.png", import.meta.url).href,
  new URL("@/assets/Sklls/Js.png", import.meta.url).href,
  new URL("@/assets/Sklls/Vue.svg", import.meta.url).href,
  new URL("@/assets/Sklls/NUXT.jpeg", import.meta.url).href,
  new URL("@/assets/Sklls/Git.png", import.meta.url).href,
  new URL("@/assets/Sklls/Github.png", import.meta.url).href,
  new URL("@/assets/Sklls/Basic PHP.png", import.meta.url).href,
  new URL("@/assets/Sklls/RestApi.png", import.meta.url).href,
  new URL("@/assets/Sklls/firebase.png", import.meta.url).href,
];

// Detect dark theme
const isDark = ref(false);
onMounted(() => {
  const currentTheme =
    document.documentElement.getAttribute("data-bs-theme") ||
    localStorage.getItem("theme") ||
    "light";
  isDark.value = currentTheme === "dark";
});
</script>

<style scoped>
.why-section {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.03), rgba(0, 0, 0, 0.02));
  width: 100%;
}

/* 🌟 SERVICE CARD */
.service-card {
  border-radius: 18px;
  border: 1px solid var(--Theme-Color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  transition: all 0.35s ease;
  padding: 25px;
}

.service-card:hover {
  transform: translateY(-8px);
  background: var(--Theme-Color);
  color: #fff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
}

/* ICON CIRCLE */
.icon-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid var(--Theme-Color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: 0.3s;
}

.service-card:hover .icon-circle {
  background: #fff;
  border-color: #fff;
}

/* ICON */
.icon-circle i {
  font-size: 2rem;
  color: var(--Theme-Color);
  transition: color 0.3s ease;
}

.service-card:hover .icon-circle i {
  color: var(--Theme-Color);
}

/* TITLE */
.service-title {
  font-weight: 700;
  margin-top: 15px;
  font-size: 1.2rem;
}

/* DESCRIPTION */
.service-desc {
  font-size: 0.95rem;
  margin-top: 10px;
}

/* DARK MODE */
.bg-dark {
  background: #1e1e1e !important;
}

.text-white {
  color: #fff !important;
}

.border-white {
  border-color: #fff !important;
}

/* ================================
    SKILLS DESIGN
================================ */
.skills-section {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.06), rgba(255, 0, 150, 0.05));
  
  padding: 40px 20px;
  position: relative;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
}

.highlight {
  color: var(--Theme-Color);
  font-weight: 600;
}

.skill-card {
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  width: 95px;
  height: 95px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.35s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: var(--Theme-Color);
}

.skill-image {
  width: 55px;
  height: 55px;
  object-fit: contain;
}
</style>
