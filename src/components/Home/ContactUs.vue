<template>
  <section class="contact-wrapper">
    <div class="container py-5">
      <div class="row justify-content-center">
        <!-- Contact Info Card -->
        <div class="col-lg-6 col-md-8">
          <div class="contact-card p-5 text-center">
            <h2 class="fw-bold mb-4 gradient-text">Get in Touch</h2>
            <p class="mb-5 opacity-75 contact-desc">
              Have a project in mind? Let’s collaborate and build something amazing!
            </p>

            <div class="contact-info mb-4">
              <div class="contact-item mb-3">
                <i class="bi bi-geo-alt-fill me-3 icon-gradient"></i>
                <span class="contact-text">Bahria Town Phase 6, Rawalpindi, Pakistan</span>
              </div>

              <div class="contact-item mb-3">
                <i class="bi bi-telephone-fill me-3 icon-gradient"></i>
                <a href="tel:03369420537" class="text-decoration-none contact-text">
                  0336 9420537
                </a>
              </div>

              <div class="contact-item mb-3">
                <i class="bi bi-envelope-fill me-3 icon-gradient"></i>
                <a href="mailto:waseembabar.developer@gmail.com" class="text-decoration-none contact-text">
                  waseembabar.developer@gmail.com
                </a>
              </div>
            </div>

            <!-- <div class="social-links mt-4">

              <a href="https://www.facebook.com/waseembabar4/" class="me-3 fs-4 social-icon"><i class="bi bi-facebook"></i></a>
              <div class="me-3 iconDiv">
                <a href="https://twitter.com/waseembabar55" target="_blank">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </div>
              <a href="https://twitter.com/waseembabar55" class="me-3 fs-4 social-icon"><i class="bi bi-twitter-x"></i></a>
              <a href="#" class="fs-4 social-icon"><i class="bi bi-linkedin"></i></a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-wrapper {
  width: 100%;
  min-height: 100vh;
  background: var(--contact-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Variables for light/dark mode */
:root {
  --contact-bg: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
  --text-color: #fff;
  --card-bg: rgba(0, 0, 0, 0.2);
  --contact-desc-opacity: 0.75;
}

[data-bs-theme="light"] {
  --text-color: #111;
  --card-bg: rgba(255, 255, 255, 0.9);
  --contact-desc-opacity: 0.8;
}

/* Contact Card */
.contact-card {
  background: var(--card-bg);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: var(--text-color);
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(90deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Contact Items */
.contact-item {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.contact-item i {
  font-size: 24px;
  margin-right: 10px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-gradient {
  background: linear-gradient(45deg, #6366f1, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-item:hover i {
  transform: scale(1.2);
}

/* Contact Text */
.contact-text {
  color: var(--text-color);
  transition: color 0.3s ease;
}

/* Social Links */
.social-links a.social-icon {
  color: var(--text-color);
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-links a.social-icon:hover {
  transform: scale(1.2);
}

/* Contact Description opacity */
.contact-desc {
  opacity: var(--contact-desc-opacity);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-card {
    padding: 3rem 2rem;
  }
}
</style>
