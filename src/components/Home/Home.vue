<script setup>
import { ref, defineExpose, onMounted } from "vue";

const loading = ref(true); // Loader state

onMounted(() => {
  setTimeout(() => {
    loading.value = false; // Hide loader after 4 seconds
  }, 4000); // Set to 4000ms for a 4-second loader
});

import HeroSection from "../Home/HeroSection.vue";
import ThemeToggle from "../ThemeToggle.vue";
import AboutUs from "../Home/Aboutus.vue";
import Service from "../Home/Service.vue";
import Portfolio from "./Portfolio.vue";
import ContactUs from "./ContactUs.vue";
import Map from "./GoogleMap.vue";
import ChouseUs from "./ChouseUs.vue";

let activeLink = ref("home");

const setActive = (link) => {
  activeLink.value = link;
};

// Expose `setActive` to make it accessible in the template
defineExpose({ setActive });
</script>

<template>
  <!-- Loader -->
  <div v-if="loading" class="loader">
    <img src="../../assets/4.gif" alt="Loading" />
  </div>

  <div v-else style="overflow-x: hidden;">
    <!-- Navbar Code Start -->
   
    <!-- Navbar Code End -->

    <!-- Sections -->
       <!-- <ThemeToggle /> -->
    <section id="HeroSection"><HeroSection /></section>
    <!-- <section id="aboutus"><AboutUs /></section> -->
    <section id="Service"><Service /></section>
    <section id="ChouseUs"><ChouseUs /></section>
    <section id="project"><Portfolio /></section>
    <section id="contactus"><ContactUs /></section>

  </div>
</template>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  font-size: 1rem;
}

ul li a {
  color: white;
  transition: color 0.3s ease;
}
ul li a:hover {
  color: var(--Theme-Color) !important;
}
ul li {
  position: relative;
}
ul li a::after {
  content: "";
  position: absolute;
  width: 80%;
  height: 2px;
  border-radius: 5px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  transition: background-color 0.3s ease;
}
ul li a:hover::after {
  background-color: var(--Theme-Color);
}

/* Navbar background */

.navbar-toggler {
  color: white !important;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
}

.active-link {
  color: var(--Theme-Color) !important;
}
.active-link::after {
  content: "";
  position: absolute;
  width: 80%;
  height: 2px;
  border-radius: 5px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--Theme-Color);
  transition: background-color 0.3s ease;
}

/* Adjust the navbar brand and icon for smaller screens */
.navbar-brand {
  font-size: 1.2rem;
}

.LogoImage span {
  color: var(--Theme-Color);
}

/* Responsive adjustments */
</style>
