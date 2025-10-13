<template>
  <section class="contact-section py-5">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5">
        <span class="badge bg-gradient mb-3 px-3 py-2">Available 24/7</span>
        <h2 class="fw-bold display-6 mb-2">Get In Touch With Us</h2>
        <p class="lead text-muted">
          We're always here to help you with any questions or inquiries.
        </p>
      </div>

      <!-- Cards -->
      <div class="row g-4 justify-content-center">
        <div
          v-for="(card, index) in contactCards"
          :key="index"
          class="col-md-4 col-sm-6"
        >
          <div class="contact-card text-center h-100 p-4 rounded-4 shadow-sm">
            <div class="icon-wrapper mx-auto mb-4" :class="card.iconBg">
              <i :class="card.icon"></i>
            </div>

            <h5 class="fw-semibold mb-2">{{ card.title }}</h5>
            <p class="card-text mb-3">{{ card.text }}</p>

            <a
              v-if="card.link"
              :href="card.link"
              target="_blank"
              rel="noopener noreferrer"
              class="link-custom fw-semibold"
              :class="card.textColor"
            >
              {{ card.linkText }}
              <i
                class="bi bi-arrow-right ms-1"
                v-if="card.showArrow"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
  const currentTheme =
    document.documentElement.getAttribute("data-bs-theme") ||
    localStorage.getItem("theme") ||
    "light";
  isDark.value = currentTheme === "dark";
});

const contactCards = ref([
  {
    icon: "bi bi-geo-alt fs-3 text-primary",
    iconBg: "bg-primary bg-opacity-10 text-primary",
    title: "Our Location",
    text: "Bahria Town Phase 6, Rawalpindi, Pakistan",
    link: "https://maps.app.goo.gl/25xHPUCGyZitq7VJA",
    linkText: "View on Map",
    textColor: "text-primary",
    showArrow: true,
  },
  {
    icon: "bi bi-telephone fs-3 text-success",
    iconBg: "bg-success bg-opacity-10 text-success",
    title: "Call Us",
    text: "Available anytime for your questions",
    link: "tel:03369420537",
    linkText: "0336 9420537",
    textColor: "text-success",
    showArrow: false,
  },
  {
    icon: "bi bi-envelope fs-3 text-danger",
    iconBg: "bg-danger bg-opacity-10 text-danger",
    title: "Email Us",
    text: "We'll respond within 24 hours",
    link: "mailto:waseembabar55@gmail.com",
    linkText: "waseembabar55@gmail.com",
    textColor: "text-danger",
    showArrow: false,
  },
]);
</script>

<style scoped>
.contact-section {
  position: relative;
  overflow: hidden;
}

/* Background gradient for section */
.contact-section::before {
  content: "";
  position: absolute;
  top: -50px;
  left: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.15), transparent 70%);
  filter: blur(80px);
  z-index: 0;
}

.contact-section::after {
  content: "";
  position: absolute;
  bottom: -50px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle at center, rgba(236, 72, 153, 0.15), transparent 70%);
  filter: blur(80px);
  z-index: 0;
}

/* Card */
.contact-card {
  position: relative;
  z-index: 1;
  background-color: var(--card-bg, #ffffff);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
}

.contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Icon */
.icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: all 0.3s ease;
}

.contact-card:hover .icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

/* Link */
.link-custom {
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.link-custom:hover {
  text-decoration: underline;
}

/* Dark Mode */
[data-bs-theme="dark"] .contact-card {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

[data-bs-theme="dark"] .contact-card:hover {
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
}

[data-bs-theme="dark"] .card-text {
  color: #d1d1d1 !important;
}

[data-bs-theme="dark"] .link-custom:hover {
  color: #fff !important;
}

/* Gradient Badge */
.bg-gradient {
  background: linear-gradient(90deg, #6366f1, #ec4899);
  color: #fff;
  font-weight: 500;
  border-radius: 30px;
  font-size: 0.9rem;
}
</style>
