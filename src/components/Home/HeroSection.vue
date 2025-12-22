<template>
  <section class="hero-about-section">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left: Profile Info -->
        <div
          class="col-lg-6 mb-5 mb-lg-0 order-2 order-lg-1"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div class="text-content">
            <h4 class="MainHeading">Hello 👋</h4>
            <h2 class="ProfileName">
              I'm <span>Waseem</span> Babar
            </h2>
            <h5 class="ProfileExperence">
              Frontend Developer | Vue 3 | Nuxt.js | UI/UX Enthusiast
            </h5>

            <p class="about-description">
              I am a passionate 
              <span class="highlight">Frontend Developer</span> skilled in 
              <b>HTML, CSS, JavaScript, Vue 3, Nuxt.js</b>.  
              I combine <span class="highlight">design</span>, 
              <span class="highlight">creativity</span>, and 
              <span class="highlight">technology</span> to build modern, responsive, and user-focused web experiences.  
              Let’s collaborate to turn your ideas into reality!
            </p>

            <!-- Social Links -->
            <!-- <div class="SocialLink mt-4">
             
             
              <div class="me-3 iconDiv">
                <a href="https://twitter.com/waseembabar55" target="_blank">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </div>
              <div class="iconDiv">
                <a
                  class="nav-link BoldText"
                  href="waseemCv.pdf"
                  target="_blank"
                  title="Resume"
                >
                  <i class="bi bi-cloud-arrow-down"></i>
                </a>
              </div>
            </div> -->

            <div class="flex gap-3 mt-4">
  <button
    class="theme-btn"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    Let’s Work Together
  </button>

  <a
    href="/waseemCv.pdf"
    download
    class="theme-btn ms-3"
    data-aos="zoom-in"
    style="text-decoration: none;"
    data-aos-delay="300"
  >
    Download Resume
  </a>
</div>

          </div>
        </div>

        <!-- Right: Profile Image -->
        <div
          class="col-lg-6 text-center order-1 order-lg-2 mb-4 mb-lg-0"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="about-image-wrapper">
            <div class="glow-border"></div>
            <img
              src="@/assets/ProfileImages.png"
              alt="About Waseem Babar"
              class="about-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

function openWhatsApp() {
  const phoneNumber = "923369420537";
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
}

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<style scoped lang="scss">
.hero-about-section {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.03), rgba(0, 0, 0, 0.02));
  padding: 50px 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
  transition: all 0.4s ease;
}

/* Headings */
.MainHeading {
  color: var(--Theme-Color);
  font-weight: 700;
  font-size: 1.4rem;
}

.ProfileName {
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--bs-body-color);
}

.ProfileName span {
  color: var(--Theme-Color);
}

.ProfileExperence {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--bs-body-color);
}

.ProfileExperence span {
  color: var(--Theme-Color);
  font-weight: 900;
}

/* About Description */
.about-description {
  color: var(--bs-secondary-color);
  font-size: 1rem;
  line-height: 1.7;
}

.highlight {
  color: var(--Theme-Color);
}

/* Button */
.theme-btn {
  background: var(--Theme-Color);
  border: none;
  color: #fff;
  padding: 12px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.theme-btn:hover {
  background: var(--Theme-Color-3);
  transform: translateY(-3px);
}

/* Social Icons */
.SocialLink {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.SocialLink div,
.SocialLink button {
  height: 42px;
  width: 42px;
  border: 2px solid var(--Theme-Color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  background: transparent;
}

.SocialLink i {
  font-size: 1.3rem;
  color: var(--Theme-Color);
}

.SocialLink div:hover,
.SocialLink button:hover {
  background: var(--Theme-Color);
  transform: scale(1.1);
}
.SocialLink div:hover i,
.SocialLink button:hover i {
  color: #fff;
}

/* Image */
.about-image-wrapper {
  height: 330px;
  width: 330px;
  position: relative;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  padding: 18px;
  transition: transform 0.5s ease;
  background: radial-gradient(circle, var(--Theme-Color), transparent 70%);
}

.about-image-wrapper:hover {
  transform: scale(1.05);
}

.glow-border {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 3px solid var(--Theme-Color);
  animation: glow 2.5s ease-in-out infinite;
  z-index: 0;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px var(--Theme-Color), 0 0 20px var(--Theme-Color-3);
  }
  50% {
    box-shadow: 0 0 35px var(--Theme-Color-3), 0 0 50px var(--Theme-Color);
  }
  100% {
    box-shadow: 0 0 10px var(--Theme-Color), 0 0 20px var(--Theme-Color-3);
  }
}

.about-image {
  width: 80%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  transition: transform 0.4s ease;
}
.about-image:hover {
  transform: scale(1.05);
}

/* Dark Mode */
[data-bs-theme="dark"] .hero-about-section {
  background: #121212;
  color: #eaeaea;
}
[data-bs-theme="dark"] .about-description {
  color: #cfcfcf;
}
</style>
