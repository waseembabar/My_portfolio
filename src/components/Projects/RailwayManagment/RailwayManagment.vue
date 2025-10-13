<template>
  <div class="container py-5">
    <!-- Header -->
    <div class="row text-center mb-4">
      <router-link to="/" class="back-link mb-2 d-inline-block">← Go Back</router-link>
      <h2 class="fw-bold mb-2 text-gradient">Railways Management System</h2>
      <p class="lead text-muted">
        In this project, I played a crucial role in managing all station activities,
        focusing on the seamless operation of the railway system. My responsibilities
        included overseeing train operations, maintaining schedules, managing ticketing,
        and supervising employees for efficient coordination. My work ensured passenger
        safety and smooth overall operations.
      </p>
    </div>

    <!-- Skills Used -->
    <div class="skills-section text-center mb-4">
      <h5 class="fw-bold text-gradient">Technologies Used</h5>
      <ul class="skillListUse justify-content-center">
        <li v-for="(skill, i) in skills" :key="i">
          <button class="skill-btn">{{ skill }}</button>
        </li>
      </ul>
    </div>

    <!-- Image Gallery -->
    <div class="row g-3 justify-content-center">
      <div
        class="col-12 col-md-4"
        v-for="(img, index) in projectImages"
        :key="index"
      >
        <div class="image-card" @click="openModal(img)">
          <img
            :src="img"
            alt="Railways Management Screenshot"
            class="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade show" tabindex="-1" v-if="showModal" @click.self="closeModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-transparent border-0">
          <img
            :src="selectedImage"
            class="img-fluid rounded shadow-lg"
            alt="Preview"
          />
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

// Skills used
const skills = [
  "HTML",
  "CSS",
  "Bootstrap 5",
  "Vue",
  "Paina",
  "Firebase",
  "Stripe.js",
];

// Project images
const projectImages = [
  new URL("@/assets/RailwayManagment/TrainManagement1.png", import.meta.url).href,
  new URL("@/assets/RailwayManagment/TrainManagement2.png", import.meta.url).href,
  new URL("@/assets/RailwayManagment/TrainManagement3.png", import.meta.url).href,
  new URL("@/assets/RailwayManagment/TrainManagement4.png", import.meta.url).href,
  new URL("@/assets/RailwayManagment/TrainManagement5.png", import.meta.url).href,
];

// Modal Logic
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
/* ========== Layout ========== */
.back-link {
  text-decoration: none;
  color: var(--Theme-Color);
  font-weight: 500;
  transition: color 0.3s ease;
}
.back-link:hover {
  color: var(--bs-primary);
}

.text-gradient {
  background: linear-gradient(90deg, var(--Theme-Color), #6f42c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ========== Skills Section ========== */
.skillListUse {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0;
}
.skillListUse li {
  list-style: none;
}
.skill-btn {
  background: rgba(0, 0, 0, 0.05); 
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 6px 14px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
.skill-btn:hover {
  background: var(--Theme-Color);
  color: #fff;
  border-color: var(--Theme-Color);
}

/* 🌙 Dark Theme Support */
body[data-theme="dark"] .skill-btn {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
body[data-theme="dark"] .skill-btn:hover {
  background: var(--Theme-Color);
  color: #fff;
  border-color: var(--Theme-Color);
}

/* ========== Image Gallery ========== */
.image-card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.4s ease, box-shadow 0.3s ease;
}
.image-card img {
  width: 100%;
  border-radius: 12px;
  transition: transform 0.4s ease;
}
.image-card:hover img {
  transform: scale(1.05);
}
.image-card:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

/* ========== Modal Styling ========== */
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
body[data-theme="dark"] .image-card:hover {
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
}
</style>
