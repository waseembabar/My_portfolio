<template>
  <section class="hero-about-section py-5 py-md-6">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left: Profile Info -->
        <div
          class="col-lg-6 mb-5 mb-lg-0"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div class="text-content">
            <h4 class="MainHeading">Hello 👋</h4>
            <h2 class="ProfileName">
              I'm <span>Waseem</span> Babar
            </h2>
            <h5 class="ProfileExperence">
              I am <span id="typed"></span>
            </h5>

           <p class="about-description">
  I'm <strong>Waseem Babar</strong>, a passionate 
  <span class="highlight">Frontend Developer</span> leading a talented team skilled in 
  <b>HTML, CSS, JavaScript, Vue 3, and Nuxt.js</b>.  
  We merge <span class="highlight">design</span>, <span class="highlight">creativity</span>, and 
  <span class="highlight">technology</span> to craft dynamic, user-focused web experiences.  
  Let’s collaborate to turn your ideas into reality and build something truly exceptional that stands out in the digital world.
</p>

            <!-- Social Links -->
            <!-- <div class="SocialLink mt-4">
              <div class="me-3 iconDiv">
                <a href="https://www.facebook.com/waseembabar4/" target="_blank">
                  <i class="ion-social-facebook-outline"></i>
                </a>
              </div>
              <div class="me-3 iconDiv" @click="openWhatsApp">
                <i class="ion-social-whatsapp-outline"></i>
              </div>
              <div class="me-3 iconDiv">
                <a href="https://twitter.com/waseembabar55" target="_blank">
                  <i class="bi-social-twitter-outline">

                  </i>
                </a>
              </div>
         <div class="me-3 iconDiv">
                <a
                  href="https://www.linkedin.com/in/waseem-babar-447480160"
                  target="_blank"
                >
                  <i class="ion-social-linkedin-outline"></i>
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
<div class="SocialLink mt-4">
  <div class="me-3 iconDiv">
    <a href="https://www.facebook.com/waseembabar4/" target="_blank">
      <i class="bi bi-facebook"></i>
    </a>
  </div>
  <div class="me-3 iconDiv" @click="openWhatsApp">
    <i class="bi bi-whatsapp"></i>
  </div>
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
</div>

            <button
              class="theme-btn mt-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Let’s Work Together
            </button>
          </div>
        </div>

        <!-- Right: Profile Image -->
        <div
          class="col-lg-6 text-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div class="about-image-wrapper">
            <div class="glow-border"></div>
            <img
              src="@/assets/AboutUsSection.png"
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
import { ref, onMounted } from "vue";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const typedInstance = ref(null);

const initTyped = () => {
  const options = {
    strings: [
      "Frontend Developer",
      "Vue 3 Expert",
      "Nuxt.js Developer",
      "UI/UX Enthusiast",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  };
  typedInstance.value = new Typed("#typed", options);
};

function openWhatsApp() {
  const phoneNumber = "923359897059";
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
}

onMounted(() => {
  AOS.init();
  initTyped();
});
</script>

<style scoped lang="scss">
.hero-about-section {
    background: linear-gradient(135deg, rgba(13, 110, 253, 0.03), rgba(0, 0, 0, 0.02));
  transition: all 0.4s ease;
  border-radius: 20px;
  padding: 50px 0; 
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

.SocialLink div {
  height: 42px;
  width: 42px;
  border: 2px solid var(--Theme-Color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.SocialLink i {
  font-size: 1.3rem;
  color: var(--Theme-Color);
}

.SocialLink div:hover {
  background: var(--Theme-Color);
  transform: scale(1.1);
}
.SocialLink div:hover i {
  color: #fff;
}

/* Image */
.about-image-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  padding: 10px;
  transition: transform 0.5s ease;
  background: radial-gradient(
    circle,
    var(--Theme-Color, #007bff),
    transparent 70%
  );
}
.about-image-wrapper:hover {
  transform: scale(1.05);
}
.glow-border {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 3px solid var(--Theme-Color);
  animation: glow 3s linear infinite;
  z-index: 0;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px var(--Theme-Color),
      0 0 20px var(--Theme-Color-3, #00e0ff);
  }
  50% {
    box-shadow: 0 0 30px var(--Theme-Color-3),
      0 0 50px var(--Theme-Color);
  }
  100% {
    box-shadow: 0 0 10px var(--Theme-Color),
      0 0 20px var(--Theme-Color-3);
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
  box-shadow: 0 4px 25px rgba(255, 255, 255, 0.05);
}
[data-bs-theme="dark"] .about-description {
  color: #cfcfcf;
}
[data-bs-theme="dark"] .MainHeading {
  color: var(--Theme-Color);
}
[data-bs-theme="dark"] .SocialLink div {
  border-color: var(--Theme-Color);
}
</style>
