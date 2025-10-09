<script setup>
import { onMounted } from 'vue';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS script

onMounted(() => {
  AOS.init(); // Initialize AOS
});
</script>
<template>
    <h3 class="text-center MainHeading pt-5 pb-5">Why Chouse Us</h3>
    <div class="container overflow-hidden">
  <div class="row gy-5">
    <div class="col-md-4  " data-aos="fade-up">
      <div class="p-3 ServicesCard ">
        <h4 class="MainHeading">Responsive Web Development:</h4>
        <p>
          Building responsive and mobile-friendly websites with HTML, CSS,
          Bootstrap, and Tailwind to ensure a seamless user experience on all
          devices.
        </p>
      </div>
    </div>
    <div class="col-md-4  " data-aos="fade-up">
      <div class="p-3  ServicesCard"><h4 class="MainHeading">Single Page Applications (SPA):</h4>
        <p>
          Developing interactive and high-performance SPAs with Vue.js,
          optimized for fast load times and smooth user interactions.
        </p></div>
    </div>
    <div class="col-md-4  " data-aos="fade-up">
      <div class="p-3  ServicesCard"><h4 class="MainHeading">State Management:</h4>
        <p>
          Implementing efficient state management solutions for complex
          applications using Pinia, ensuring data consistency and seamless
          interaction across different app components.
        </p></div>
    </div>
    <div class="col-md-4  " data-aos="fade-up">
      <div class="p-3  ServicesCard"><h4 class="MainHeading">Frontend Optimization:</h4>
        <p>
          Using Sass for advanced CSS functionalities to create more organized,
          reusable stylesheets for efficient and faster-loading sites.
        </p></div>
    </div>

    <div class="col-md-4  " data-aos="fade-up">
      <div class="p-3  ServicesCard"> <h4 class="MainHeading">Firebase Integration:</h4>
        <p>
          Setting up Firebase for authentication, database storage, and hosting,
          ideal for projects needing backend services without server
          maintenance.
        </p></div>
    </div>
    <div class="col-md-4  " data-aos="fade-up">
      <div class="p-3  ServicesCard"><h4 class="MainHeading">Version Control and Collaboration:</h4>
        <p>
Providing Git and GitHub support for version control, branching strategies, and collaborative work, enabling efficient project management.
        </p></div>
    </div>

    <div class="col-md-4  " data-aos="fade-up">
      <div class="p-3  ServicesCard">  <h4 class="MainHeading">UI/UX Component Libraries:</h4>
        <p>
          Creating reusable, consistent UI components and libraries to enhance user experience and speed up development for future projects.
        </p></div>
    </div>
  </div>
</div>
 
</template>



<style  scoped>
.ServicesCard{
  border: 1px solid var(--Theme-Color);
  border-radius: 15px;
  
}
.ServicesCard .MainHeading{
  font-size: 1.2rem !important;
}

.mainDiv div h4{
    font-size: 1.3rem;
}
.mainDiv div p{
    font-size: 1rem;
}
</style>