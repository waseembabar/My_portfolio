<template>
  <div class="container py-5">
    <!-- Header -->
    <div class="row text-center mb-4">
      <router-link to="/" class="back-link mb-2 d-inline-block">← Go Back</router-link>
      <h2 class="fw-bold mb-2 text-gradient">Account Management — publish.jobs</h2>
      <p class="lead text-muted">
        Developed a secure and user-friendly account management module that enables users to
        update their profile information, manage invitations, and monitor connected devices.
        Focused on providing an intuitive interface with seamless performance and robust
        data protection using Nuxt 3.
      </p>
    </div>

    <!-- Key Features -->
    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <ul class="feature-list">
          <li><b>Profile Updates:</b> Users can update their name, password, and profile image securely.</li>
          <li><b>Invitations:</b> Receive and manage job or business invitations directly within the dashboard.</li>
          <li><b>Connected Devices:</b> View and manage logged-in devices for enhanced security.</li>
          <li><b>Responsive Design:</b> Optimized for all screen sizes with fast-loading UI.</li>
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
      <div
        class="col-12 col-md-4"
        v-for="(img, index) in projectImages"
        :key="index"
      >
        <div class="image-card" @click="openModal(img)">
          <img :src="img" alt="Account Management Screenshot" class="img-fluid rounded shadow-sm" />
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

// Skills used
const skills = [
  "Nuxt 3",
  "Tailwind CSS",
  "TypeScript",
  "Vuetify",
  "Vuexy",
  "Firebase",
  "Pinia",
];

// Project images
const projectImages = [
  new URL("@/assets/OtsProject/account/a1.png", import.meta.url).href,
  new URL("@/assets/OtsProject/account/a2.png", import.meta.url).href,
  new URL("@/assets/OtsProject/account/a3.png", import.meta.url).href,
  new URL("@/assets/OtsProject/account/a4.png", import.meta.url).href,
  new URL("@/assets/OtsProject/account/a5.png", import.meta.url).href,
  new URL("@/assets/OtsProject/account/a6.png", import.meta.url).href,
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

/* Headings */
.text-gradient {
  background: linear-gradient(90deg, var(--Theme-Color), #6f42c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ========== Features List ========== */
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
  transition: background 0.3s ease;
}
.feature-list li:hover {
  background: rgba(13, 110, 253, 0.12);
}

/* ========== Skills Section ========== */
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


/* ========== Image Gallery ========== */
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

/* Dark Mode */
body[data-theme='dark'] .feature-list li {
  background: rgba(255, 255, 255, 0.08);
}
body[data-theme='dark'] .image-card:hover {
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.15);
}
</style>
