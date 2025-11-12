<template>
  <section class=" py-5 py-md-6"  :class="[
    'py-5 py-md-6',
    theme === 'light' ? 'about-section' : ''
  ]">
    <div class="container">
      <div class="row align-items-center">
        <!-- Image Section -->
     

        <!-- Text Section -->
        <div
          class="col-md-7"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          
         
          <p class="about-description">
            I'm <strong>Waseem Babar</strong>, leading a passionate team skilled
            in <b>HTML, CSS, JavaScript, Vue 3, and Nuxt.js</b> to create
            dynamic, user-focused web experiences.  
            We blend <span class="highlight">creativity</span> and
            <span class="highlight">technology</span> to turn your ideas into
            reality. Let’s collaborate and build something exceptional that
            stands out in the digital world.
          </p>

          <button class="theme-btn mt-3" data-aos="zoom-in" data-aos-delay="300">
            Let’s Work Together
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JS needed here
</script>

<style scoped lang="scss">
.about-section {
  background: linear-gradient(
    135deg,
    var(--Theme-Color-3, #f0f9ff),
    #ffffff
  );
  border-radius: 12px;
  padding: 60px 0;
  overflow: hidden;
  position: relative;
}

/* Glow Border Wrapper */
.about-image-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  padding: 10px;
  background: radial-gradient(
    circle,
    var(--Theme-Color, #007bff),
    transparent 70%
  );
  transition: transform 0.5s ease;
}

.about-image-wrapper:hover {
  transform: scale(1.05);
}

/* Glowing animated border */
.glow-border {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 3px solid var(--Theme-Color, #007bff);
  animation: glow 3s linear infinite;
  z-index: 0;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px var(--Theme-Color),
      0 0 20px var(--Theme-Color-3, #00e0ff);
  }
  50% {
    box-shadow: 0 0 25px var(--Theme-Color-3),
      0 0 50px var(--Theme-Color);
  }
  100% {
    box-shadow: 0 0 10px var(--Theme-Color),
      0 0 20px var(--Theme-Color-3);
  }
}

/* Image */
.about-image {
  width: 80%;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

/* Text Section */
.about-title {
  font-size: 2.5rem;
  font-weight: 700; 
}

.highlight {
  color: var(--Theme-Color);
}

.about-role {
  color: var(--Theme-Color-3, #00bcd4);
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 5px;
  font-size: 1.2rem;
}

.about-description { 
  margin-top: 15px;
  line-height: 1.7;
  font-size: 1rem;
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
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  background: var(--Theme-Color-3);
  transform: translateY(-3px);
}
</style>
