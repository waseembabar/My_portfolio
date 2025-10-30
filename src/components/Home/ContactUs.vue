<template>
  <section class="contact-wrapper">
 <div class="container">
     <div class="row" >
      <!-- Left Column - Contact Form -->
      <div class="col-lg-8 col-md-7 p-5 form-column">
        <h1 class="mb-4 fw-bold gradient-text">Send us a message</h1>

        <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  @submit.prevent="submitForm"
  class="contact-form"
>
  <!-- Hidden input for Netlify -->
  <input type="hidden" name="form-name" value="contact" />
  <p class="d-none">
    <label>Don’t fill this out: <input name="bot-field" /></label>
  </p>

  <!-- Name -->
  <div class="mb-3">
    <label for="name" class="form-label">Name*</label>
    <input
      type="text"
      name="name"
      class="form-control"
      id="name"
      placeholder="Your name"
      v-model="form.name"
      required
    />
  </div>

  <!-- Row: First Name & Phone -->
  <div class="row mb-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input
        type="text"
        name="firstName"
        class="form-control"
        id="firstName"
        placeholder="First Name"
        v-model="form.firstName"
      />
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input
        type="tel"
        name="phone"
        class="form-control"
        id="phone"
        placeholder="Phone Number"
        v-model="form.phone"
      />
    </div>
  </div>

  <!-- Message -->
  <div class="mb-4">
    <label for="message" class="form-label">Message*</label>
    <textarea
      name="message"
      class="form-control"
      id="message"
      rows="5"
      placeholder="Write your message"
      v-model="form.message"
      required
    ></textarea>
  </div>

  <!-- Button -->
  <button type="submit" class="btn btn-gradient btn-lg">
    Send Message
  </button>
</form>

 

        <!-- Services -->
       
      </div>

      <!-- Right Column - Info -->
      <div class="col-lg-4 col-md-5 text-white p-5 contact-info-column">
        <h2 class="fw-bold mb-4">Contact Information</h2>
        <p class="mb-4 opacity-75">
          Have a project in mind? Let’s make something great together!
        </p>

        <div class="contact-info">
          <div class="contact-item mb-3">
            <i class="bi bi-geo-alt-fill me-2"></i>
            <span>Bahria Town Phase 6, Rawalpindi, Pakistan</span>
          </div>

          <div class="contact-item mb-3">
            <i class="bi bi-telephone-fill me-2"></i>
            <a href="tel:03369420537" class="text-white text-decoration-none"
              >0336 9420537</a
            >
          </div>

          <div class="contact-item">
            <i class="bi bi-envelope-fill me-2"></i>
            <a
              href="mailto:waseembabar55@gmail.com"
              class="text-white text-decoration-none"
              >waseembabar55@gmail.com</a
            >
          </div>
        </div>

        <div class="social-links mt-4">
          <a href="#" class="me-3 text-white fs-4"><i class="bi bi-facebook"></i></a>
          <a href="#" class="me-3 text-white fs-4"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-white fs-4"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
 </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const form = ref({
  name: "",
  firstName: "",
  phone: "",
  message: "",
});

const isDark = ref(false);

onMounted(() => {
  const theme =
    document.documentElement.getAttribute("data-bs-theme") ||
    localStorage.getItem("theme") ||
    "light";
  isDark.value = theme === "dark";
});

const submitForm = () => {
  const formEl = document.querySelector('form[name="contact"]');
  formEl.submit();
};
</script>

<style scoped>
/* Full Width Section */
.contact-wrapper { 
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: var(--contact-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Light & Dark Theme Backgrounds */
:root {
  --contact-bg: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.12),
      transparent 50%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(236, 72, 153, 0.12),
      transparent 50%
    );
  --form-bg: #ffffff;
  --text-color: #1e1e1e;
  --border-color: #ddd;
}

[data-bs-theme="dark"] {
  --contact-bg: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.15),
      transparent 60%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(236, 72, 153, 0.15),
      transparent 60%
    ),
    #0f0f0f;
  --form-bg: #1e1e1e;
  --text-color: #ffffff;
  --border-color: rgba(255, 255, 255, 0.15);
}

.form-column {
  background-color: var(--form-bg);
  color: var(--text-color);
}

/* Contact Info Gradient Column */
.contact-info-column {
  background: linear-gradient(135deg, #6366f1, #ec4899);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Form Styles */
.contact-form .form-control {
  border-radius: 8px;
  border: 1px solid var(--border-color);
  padding: 12px 14px;
  font-size: 15px;
  background-color: transparent;
  color: var(--text-color);
  transition: all 0.3s ease;
}

.contact-form .form-control:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.25);
}

.btn-gradient {
  background: linear-gradient(90deg, #6366f1, #ec4899);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 40px;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.3s ease;
}

.btn-gradient:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.gradient-text {
  background: linear-gradient(90deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-info i {
  color: #fff;
}

.contact-item {
  font-size: 16px;
  display: flex;
  align-items: center;
}

.social-links a {
  transition: 0.3s ease;
}

.social-links a:hover {
  opacity: 0.8;
  transform: scale(1.1);
}

/* Responsive */
@media (max-width: 992px) {
  .contact-info-column {
    text-align: center;
  }
}
</style>
