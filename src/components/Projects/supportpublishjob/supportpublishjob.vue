 <template>
  <div class="container py-5">
    <div class="row text-center mb-4">
      <router-link to="/" class="back-link mb-2 d-inline-block">← Go Back</router-link>
      <h2 class="fw-bold mb-2 text-gradient">Help & Support System — publish.jobs</h2>
      <p class="lead text-muted">
        Designed a multi-tier support architecture that empowers users to solve issues 
        independently while providing direct access to expert assistance when needed.
      </p>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h5 class="fw-bold mb-3 text-start px-2 border-bottom pb-2">How Problems are Resolved:</h5>
        <ul class="feature-list">
          <li>
            <span class="icon-placeholder">🔍</span>
            <div>
              <b>Step 1: Self-Service Check</b> — Users can search the integrated knowledge base. If a matching solution is found, the problem is resolved instantly without staff intervention.
            </div>
          </li>
          <li>
            <span class="icon-placeholder">💬</span>
            <div>
              <b>Step 2: Expert Connection</b> — If no solution is found, users can connect with the support team via real-time messaging or specialized team channels.
            </div>
          </li>
          <li>
            <span class="icon-placeholder">🛠️</span>
            <div>
              <b>Step 3: Admin Intervention</b> — For complex technical issues, the request is escalated to the Admin. The Admin investigates the root cause and applies a direct fix to the user's account.
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-md-8">
        <h5 class="fw-bold mb-3 text-start px-2 border-bottom pb-2">Key Features:</h5>
        <ul class="feature-list">
          <li><b>Article Categorization:</b> Support content is organized by topics for faster browsing.</li>
          <li><b>Real-time Chat:</b> Integrated communication bridge between users and the support desk.</li>
          <li><b>Admin Dashboard:</b> A powerful backend for admins to monitor, track, and resolve escalated tickets.</li>
          <li><b>Feedback Loop:</b> Users receive notifications once the admin has successfully resolved their reported issue.</li>
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

    <div class="row g-3 justify-content-center">
      <div class="col-12 col-md-4" v-for="(img, index) in projectImages" :key="index">
        <div class="image-card" @click="openModal(img)">
          <img :src="img" alt="Support Screenshot" class="img-fluid rounded shadow-sm" />
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div class="custom-modal-overlay" v-if="showModal" @click.self="closeModal">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content bg-transparent border-0 position-relative">
            <img :src="selectedImage" class="img-fluid rounded shadow-lg full-preview-img" alt="Preview" />
            <button
              type="button"
              class="btn-close-custom"
              @click="closeModal"
            >✕</button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const skills = ["Vue 3", "Tailwind CSS", "Pinia", "Real-time Chat", "Escalation Logic", "Firebase"];

const projectImages = [
  new URL("@/assets/OtsProject/support/s1.png", import.meta.url).href,
  new URL("@/assets/OtsProject/support/s2.png", import.meta.url).href,
  new URL("@/assets/OtsProject/support/s3.png", import.meta.url).href,
  new URL("@/assets/OtsProject/support/s4.png", import.meta.url).href,
];

const showModal = ref(false);
const selectedImage = ref(null);

function openModal(img) {
  selectedImage.value = img;
  showModal.value = true;
  document.body.style.overflow = "hidden"; // Prevent scroll
}

function closeModal() {
  showModal.value = false;
  selectedImage.value = null;
  document.body.style.overflow = "auto"; // Restore scroll
}
</script>

<style scoped>
/* Layout & Typography */
.text-gradient {
  background: linear-gradient(90deg, #ff4d6d, #6f42c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.back-link {
  text-decoration: none;
  color: #ff4d6d;
  font-weight: 500;
}

/* Feature List Styling */
.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  margin-bottom: 12px;
  background: rgba(111, 66, 193, 0.05);
  border-left: 4px solid #ff4d6d;
  padding: 12px 15px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  transition: transform 0.2s ease;
}

.feature-list li:hover {
  transform: translateX(8px);
  background: rgba(111, 66, 193, 0.08);
}

.icon-placeholder {
  margin-right: 12px;
  font-size: 1.2rem;
}

/* Skills Section */
.skillListUse {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.skill-btn {
  background: linear-gradient(90deg, #ff4d6d, #6f42c1);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 6px 14px;
  font-size: 0.9rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

/* Image Cards */
.image-card {
  cursor: pointer;
  border-radius: 12px;
  padding: 3px;
  background: linear-gradient(90deg, #ff4d6d, #6f42c1);
  transition: transform 0.3s ease;
}

.image-card:hover {
  transform: scale(1.02);
}

/* Custom Modal Styles (Essential for Vue) */
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.full-preview-img {
  max-height: 85vh;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
}

.btn-close-custom {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

/* Transition Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>