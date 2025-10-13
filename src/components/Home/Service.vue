<template>
  <div class="container-fluid why-section pt-4 px-6">
    <!-- Service Section -->
    <div class="row">
      <h4 class="text-center MainHeading pt-3 pb-0 m-0 pt-md-5">Service</h4>
      <p class="text-center mainParagraph">What I Do</p>
    </div>

   <div class="row pt-3 pt-md-5">
      <div class="col-md-10 offset-md-1">
        <div class="container text-center">
        <div class="row gy-3 gx-3">
          <div
            class="col-12 col-sm-12 col-md-4"
            v-for="(service, index) in services"
            :key="index"
            data-aos="fade-up"
          >
            <div class="p-3 cards">
              <div>
                <i :class="service.icon"></i>
                <p class="card-text">{{ service.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="skills-section pt-5 pb-4 mt-5">
      <h4 class="MainHeading text-center mb-3">Skills</h4>
      <p class="SmallText text-center skill-desc">
        A web development expert skilled in
        <span class="highlight">modern front-end tools</span> and
        <span class="highlight">cutting-edge frameworks</span> —
        transforming ideas into stunning, fast, and responsive digital experiences.
      </p>

      <!-- Skill Images Grid -->
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
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
onMounted(() => {
  AOS.init({ duration: 600 });
});

// Services
const services = [
  { icon: "bi bi-code", title: "HTML CSS JS Project" },
  { icon: "bi bi-pc-display-horizontal", title: "Desktop App" },
  { icon: "bi bi-phone", title: "Mobile Friendly" },
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
</script>

<style scoped>
.why-section {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.03), rgba(0, 0, 0, 0.02));
  width: 100%;
}

/* ========= SERVICE CARDS ========= */
.cards {
  background: var(--bs-light);
  border: 1px solid var(--Theme-Color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.cards:hover {
  background: var(--Theme-Color);
  color: #fff;
  transform: translateY(-6px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}
.cards i {
  font-size: 2.5rem;
  color: var(--Theme-Color);
  transition: color 0.3s ease;
}
.cards:hover i {
  color: #fff;
}
.cards p {
  margin-top: 10px;
  font-weight: 500;
  font-size: 1.1rem;
}

/* ========= HEADINGS ========= */
.MainHeading {
  color: var(--Theme-Color);
  font-weight: 700;
} 

/* ========= SKILLS SECTION ========= */
.skills-section {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.05), rgba(255, 0, 150, 0.05));
  border-radius: 20px;
  padding: 40px 20px;
  margin-top: 40px;
  position: relative;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
}
.skills-section::before {
  content: "";
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--Theme-Color) 0%, transparent 70%);
  opacity: 0.1;
  z-index: 0;
}
.skill-desc {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6; 
}
.highlight {
  color: var(--Theme-Color);
  font-weight: 600;
}

/* ========= SKILL LOGO GRID ========= */
.skill-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 15px;
  width: 100px;
  height: 100px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}
.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border-color: var(--Theme-Color);
}
.skill-image {
  width: 55px;
  height: 55px;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.skill-card:hover .skill-image {
  transform: scale(1.15);
}

/* ========= DARK THEME ========= */
body[data-theme="dark"] .cards {
  background: #1e1e1e;
  border-color: var(--Theme-Color);
}
body[data-theme="dark"] .cards:hover {
  background: var(--Theme-Color);
  color:white
}
body[data-theme="dark"] .SmallText,
body[data-theme="dark"] .skill-desc {
  color: #ccc;
}
body[data-theme="dark"] .skill-card {
  background: #1e1e1e;
  border-color: #333;
}
body[data-theme="dark"] .skill-card:hover {
  border-color: var(--Theme-Color);
}

.card-text {
  color: #000;
  transition: color 0.3s ease;
}

/* Dark mode base text */
body[data-theme="dark"] .card-text {
  color: #ccc;
}

/* Hover in light mode */
.cards:hover .card-text {
  color: #000;
}

/* Hover in dark mode */
body[data-theme="dark"] .cards:hover .card-text {
  color: #fff !important;
}
</style>
