<template>
  <div class="container py-5">
    <!-- Header -->
    <div class="row text-center mb-4">
      <router-link to="/" class="back-link mb-2 d-inline-block">← Go Back</router-link>
      <h2 class="fw-bold mb-2 text-gradient">employer.publish.jobs</h2>
      <p class="lead text-muted">
        Developed an advanced employer management system that empowers businesses to create and manage company profiles,
        post jobs, and design reusable job templates. Integrated features for handling complete recruitment operations,
        including candidate shortlisting, interview scheduling, and selection workflows. Built with Nuxt 3 for
        blazing-fast performance, SEO optimization, and a responsive interface that ensures a smooth and professional
        hiring experience.
      </p>
    </div>

    <!-- Key Features -->
    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <ul class="feature-list">
          <li><b>Business Management:</b> Employers can create and customize their business profiles with branding and details.</li>
          <li><b>Job Posting & Templates:</b> Post new job openings or design reusable templates for faster listings.</li>
          <li><b>Recruitment Workflow:</b> Manage the complete hiring process — from job creation to candidate selection.</li>
          <li><b>Interview & Shortlisting Tools:</b> Schedule interviews, shortlist candidates, and track selection progress.</li>
          <li><b>Real-Time Operations:</b> Get instant updates on job applications, candidate responses, and interview outcomes.</li>
        </ul>
      </div>
    </div>

    <!-- Skills Used -->
    <div class="skills-section text-center mb-5">
      <h5 class="fw-bold mb-3 text-gradient">Technologies Used</h5>
      <ul class="skillListUse justify-content-center">
        <li v-for="(skill, i) in skills" :key="i">
          <button class="skill-btn">{{ skill }}</button>
        </li>
      </ul>
    </div>

    <!-- Image Gallery -->
    <div class="row g-3 justify-content-center">
      <div class="col-12 col-md-4" v-for="(img, index) in projectImages" :key="index">
        <div class="image-card" @click="openModal(img.src)">
          <img :src="img.src" :alt="img.alt" class="img-fluid rounded shadow-sm" />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade show" tabindex="-1" v-if="showModal" @click.self="closeModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-transparent border-0">
          <img :src="selectedImage" class="img-fluid rounded shadow-lg" alt="Preview" />
          <button
            type="button"
            class="btn-close btn-close-white position-absolute top-0 end-0 m-3"
            @click="closeModal"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const skills = [
  "Nuxt 3",
  "Tailwind CSS",
  "CSS3",
  "TypeScript",
  "Vuetify",
  "Vuexy",
  "Pinia",
  "Fully Functional",
];

const projectImages = [
  { src: new URL("@/assets/OtsProject/Employer/Employer1.png", import.meta.url).href, alt: "Dashboard" },
  { src: new URL("@/assets/OtsProject/Employer/Employer2.png", import.meta.url).href, alt: "Job Listing" },
  { src: new URL("@/assets/OtsProject/Employer/Employer3.png", import.meta.url).href, alt: "Templates" },
  { src: new URL("@/assets/OtsProject/Employer/Employer4.png", import.meta.url).href, alt: "Shortlisting" },
  { src: new URL("@/assets/OtsProject/Employer/Employer5.png", import.meta.url).href, alt: "Interview Page" },
  { src: new URL("@/assets/OtsProject/Employer/Employer6.png", import.meta.url).href, alt: "Reports" },
  { src: new URL("@/assets/OtsProject/Employer/Employer7.png", import.meta.url).href, alt: "Settings" },
  { src: new URL("@/assets/OtsProject/Employer/Employer8.png", import.meta.url).href, alt: "Activity Log" },
  { src: new URL("@/assets/OtsProject/Employer/Employera1.png", import.meta.url).href, alt: "Notifications" },
];

const showModal = ref(false);
const selectedImage = ref(null);

function openModal(img) {
  selectedImage.value = img;
  showModal.value = true;
  document.body.classList.add("modal-open");
}

function closeModal() {
  showModal.value = false;
  selectedImage.value = null;
  document.body.classList.remove("modal-open");
}
</script>

<style scoped>
/* Go Back Link */
.back-link {
  text-decoration: none;
  color: var(--Theme-Color);
  font-weight: 500;
  transition: color 0.3s ease;
}
.back-link:hover {
  color: var(--bs-primary);
}

/* Gradient Text */
.text-gradient {
  background: linear-gradient(90deg, var(--Theme-Color), #6f42c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Feature List */
.feature-list {
  list-style: none;
  padding: 0;
  text-align: left;
}
.feature-list li {
  margin-bottom: 10px;
  background: rgba(13, 110, 253, 0.05);
  border-left: 4px solid var(--Theme-Color);
  padding: 10px 12px;
  border-radius: 6px;
  transition: background 0.3s ease, transform 0.2s ease;
}
.feature-list li:hover {
  background: rgba(13, 110, 253, 0.12);
  transform: translateX(5px);
}

/* Skills List */
.skillListUse {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  justify-content: center;
}
.skillListUse li {
  list-style: none;
}
.skill-btn {
  background: linear-gradient(90deg, var(--Theme-Color, #ff4d6d), #6f42c1);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 6px 14px;
  font-size: 0.9rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
.skill-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Image Gallery */
.image-card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  padding: 3px;
  background: linear-gradient(90deg, var(--Theme-Color, #ff4d6d), #6f42c1);
  transition: transform 0.4s ease, box-shadow 0.3s ease;
}
.image-card img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.4s ease;
  display: block;
}
.image-card:hover img {
  transform: scale(1.05);
}
.image-card:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

/* Modal */
.modal-open {
  overflow: hidden;
}
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  z-index: 1050;
}
.modal-content img {
  width: 100%;
  height: auto;
}

/* Dark Mode */
body[data-theme='dark'] .feature-list li {
  background: rgba(255, 255, 255, 0.08);
}
body[data-theme='dark'] .image-card:hover {
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
}
body[data-theme='dark'] .skill-btn {
  color: #fff;
}
</style>
