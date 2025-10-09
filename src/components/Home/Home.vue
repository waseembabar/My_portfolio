<script setup>
import { ref, defineExpose, onMounted } from "vue";

const loading = ref(true); // Loader state

onMounted(() => {
  setTimeout(() => {
    loading.value = false; // Hide loader after 4 seconds
  }, 4000); // Set to 4000ms for a 4-second loader
});

import HeroSection from "../Home/HeroSection.vue";
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

  <div v-else >
    <!-- Navbar Code Start -->
    <nav class="navbar navbar-expand-lg fixed-top ms-sm-0 ms-md-5  ps-sm-0 ps-md-5  me-sm-0 me-md-5  pe-sm-0 pe-md-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <p class="LogoImage BoldText m-0">
            <span class="MainHeading">Waseem</span> Babar
          </p>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="Toggle_icon bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link BoldText"
                aria-current="page"
                to="#HeroSection"
                @click="setActive('home')"
                :class="{ 'active-link': activeLink === 'home' }"
              >
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link BoldText"
                to="#Service"
                @click="setActive('Service')"
                :class="{ 'active-link': activeLink === 'Service' }"
              >
                Service
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link BoldText"
                to="#project"
                @click="setActive('project')"
                :class="{ 'active-link': activeLink === 'project' }"
              >
                Project
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link BoldText"
                to="#ChouseUs"
                @click="setActive('Chouse')"
                :class="{ 'active-link': activeLink === 'Chouse' }"
              >
                Chouse Us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link BoldText"
                to="#aboutus"
                @click="setActive('about')"
                :class="{ 'active-link': activeLink === 'about' }"
              >
                About Us
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link BoldText"
                to="#contactus"
                @click="setActive('ContactUs')"
                :class="{ 'active-link': activeLink === 'ContactUs' }"
              >
                Contact Us
              </router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link BoldText"
                href="waseemCv.pdf"
                target=""
                @click="setActive('Resume')"
                :class="{ 'active-link': activeLink === 'Resume' }"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar Code End -->

    <!-- Sections -->
    <section id="HeroSection"><HeroSection /></section>
    <section id="aboutus"><AboutUs /></section>
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
  background-color: black;
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
.navbar {
  background-color: black !important;
}
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
