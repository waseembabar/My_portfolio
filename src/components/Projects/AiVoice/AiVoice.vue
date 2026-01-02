<template>
  <div class="container py-5">
  
    <div class="row text-center mb-4">
      <router-link to="/" class="back-link mb-2 d-inline-block">← Go Back</router-link>
      <h2 class="fw-bold mb-3 text-gradient">{{ content[activeTab].title }}</h2>
      <p class="lead text-muted mx-auto" style="max-width: 800px;">
        {{ content[activeTab].description }}
      </p>
    </div>

      <div class="row justify-content-center mb-5">
      <div class="col-auto">
        <div class="btn-group shadow-sm" role="group">
          <button 
            v-for="tab in ['main', 'user', 'admin']" 
            :key="tab"
            @click="activeTab = tab"
            :class="['btn', activeTab === tab ? 'btn-primary' : 'btn-outline-primary']"
          >
            {{ tab.toUpperCase() }} VIEW
          </button>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mb-5">
      <div class="col-md-8">
        <ul class="feature-list">
          <li v-for="(feature, index) in content[activeTab].features" :key="index" v-html="feature"></li>
        </ul>
      </div>
    </div>

    <div class="skills-section text-center mb-5">
      <h5 class="fw-bold mb-3 text-gradient">Technologies Used</h5>
      <ul class="skillListUse justify-content-center">
        <li v-for="(skill, i) in skills" :key="i">
          <button class="skill-btn">{{ skill }}</button>
        </li>
      </ul>
    </div>

    <div class="row g-4 justify-content-center">
      <div 
        v-for="(img, index) in content[activeTab].images" 
        :key="index"
        :class="activeTab === 'admin' ? 'col-12 col-md-4' : 'col-12 col-md-4'"
      >
        <div class="image-card" @click="openModal(img)">
          <img :src="img" :alt="activeTab + ' screenshot'" class="img-fluid rounded shadow-sm" />
        </div>
      </div>
    </div>

    <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-transparent border-0 position-relative">
          <img :src="selectedImage" class="img-fluid rounded shadow-lg" alt="Preview" />
          <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-3" @click="closeModal"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref('main');
const showModal = ref(false);
const selectedImage = ref(null);

const skills = ["HTML", "CSS", "Bootstrap 5", "Vue", "Pinia", "Firebase", "Quill Editor", "Stripe.js"];

const content = {
  main: {
    title: "AI Voice Changer",
    description: "Convert sounds using AI voice actors with a seamless Stripe-integrated payment system.",
    features: [
      "<b>Free Trials:</b> Three free trials available for new users.",
      "<b>Subscription Model:</b> Payment required after free trials via Stripe.",
      "<b>Audio Sharing:</b> Users can share generated audio for community engagement.",
      "<b>Engagement:</b> Social features like liking and commenting on posts."
    ],
    images: [
      new URL("@/assets/AiVoice/AI1.webp", import.meta.url).href,
      new URL("@/assets/AiVoice/AI2.webp", import.meta.url).href,
      new URL("@/assets/AiVoice/AI3.webp", import.meta.url).href, 
      new URL("@/assets/AiVoice/AI4.webp", import.meta.url).href,
      new URL("@/assets/AiVoice/AI5.webp", import.meta.url).href,
      new URL("@/assets/AiVoice/AI6.webp", import.meta.url).href
    ]
  },
  user: {
    title: "User Control Panel",
    description: "Manage your profile, update settings, and view subscription details in a personalized dashboard.",
    features: [
      "<b>Generated Audio:</b> Access and manage your personal creation library.",
      "<b>Coin Balance:</b> Real-time tracking of remaining credits.",
      "<b>Subscription:</b> Check plans, upgrade, or cancel directly.",
      "<b>Profile Management:</b> Update personal info and contact support."
    ],
    images: [
         new URL("@/assets/AIUseradmin/AIAdmin.webp", import.meta.url).href,
          new URL("@/assets/AIUseradmin/AIA2.webp", import.meta.url).href,
          new URL("@/assets/AIUseradmin/AIA3.webp", import.meta.url).href,
          new URL("@/assets/AIUseradmin/AIA4.webp", import.meta.url).href,
          new URL("@/assets/AIUseradmin/AIA5.webp", import.meta.url).href,
 
    ]
  },
  admin: {
    title: "Administration Portal",
    description: "Full control over the platform's ecosystem, users, and content.",
    features: [
      "<b>Blog CMS:</b> Create, update, and delete blog posts using Quill Editor.",
      "<b>Mail System:</b> Monitor and respond to user inquiries.",
      "<b>Subscription Mgmt:</b> Oversee all financial plans and new sign-ups.",
      "<b>Community Moderation:</b> Monitor today's posts and engagement stats."
    ],
    images: [ 
       new URL("@/assets/AIAdminPanel/ADMIN1.webp", import.meta.url).href,
      new URL("@/assets/AIAdminPanel/ADMIN2.webp", import.meta.url).href,
      new URL("@/assets/AIAdminPanel/ADMIN3.webp", import.meta.url).href,
      new URL("@/assets/AIAdminPanel/ADMIN4.webp", import.meta.url).href, 
    ]
  }
}; 

function openModal(img) {
  selectedImage.value = img;
  showModal.value = true;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  showModal.value = false;
  document.body.style.overflow = "auto";
}
</script>

<style scoped>
/* ========== Global Utilities ========== */
.text-gradient {
  background: linear-gradient(90deg, var(--Theme-Color, #6366f1), #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.back-link {
  text-decoration: none;
  color: var(--Theme-Color, #6366f1);
  font-weight: 500;
}

/* ========== Features ========== */
.feature-list {
  list-style: none;
  padding: 0;
}
.feature-list li {
  margin-bottom: 12px;
  background: rgba(99, 102, 241, 0.05);
  border-left: 4px solid var(--Theme-Color, #6366f1);
  padding: 12px 15px;
  border-radius: 8px;
  text-align: left;
}

/* ========== Technology Buttons ========== */
.skillListUse {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
}
.skill-btn {
  background: linear-gradient(90deg, var(--Theme-Color, #6366f1), #a855f7);
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 0.85rem;
  transition: transform 0.2s;
}
.skill-btn:hover { transform: translateY(-2px); }

/* ========== Gallery & Modal ========== */
.image-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.image-card:hover { transform: scale(1.02); }

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

/* Dark Mode */
[data-theme='dark'] .feature-list li {
  background: rgba(255, 255, 255, 0.05);
  color: #eee;
}
</style>