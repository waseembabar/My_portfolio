<template>
  <div class="container pt-4">
    <div class="row">
      <h4 class="MainHeading pt-5 text-center">Portfolio</h4>
     
    </div>
  </div>
  <div class="container px-4">
  <div class="row gx-5 gy-4">
    <h4 class="text-center py-3" >Project At <a href="https://uzrtech.com/#projects" target="_blank" rel="noopener noreferrer" class="UzrATag">UZR Technology</a>
</h4>
    <div class="col-md-4 " data-aos="fade-up" >
     <router-link to="/rms">
      <div class="p-3  ProjectCard ">
      <h5>Railway Managment System</h5>
      <img src="../../assets/RailwayManagment/TrainManagement1.png" alt="" class="img-fluid">
     </div>
     </router-link>
    </div>
    <div class="col-md-4 " data-aos="fade-up" >
      <router-link to="/aiuserside">
        <div class="p-3  ProjectCard" >
        <h5 class="text-center">AI Voice Change</h5>

        <img src="../../assets/AiVoice/AI1.webp" class="img-fluid" alt="">

      </div>
      </router-link>
    </div>
    <div class="col-md-4 " data-aos="fade-up" >
      <router-link to="/userpanel">
        <div class="p-3  ProjectCard" >
        <h5 class="text-center">AI Voice Change User DashBoard</h5>

        <img src="../../assets/AiVoice/AI1.webp" class="img-fluid" alt="">

      </div>
      </router-link>
    </div>
    <div class="col-md-4 " data-aos="fade-up" >
      <router-link to="/adminpanel">
        <div class="p-3  ProjectCard" >
        <h5 class="text-center">AI Voice  Admin Panel</h5>

        <img src="../../assets/AiVoice/AI1.webp" class="img-fluid" alt="">

      </div>
      </router-link>
    </div>
    <div class="col-md-4 " data-aos="fade-up" >
     <router-link to="/DunBradstreet">
      <div class="p-3  ProjectCard" ><h5 class="text-center">
        Dun & Bradstreet
      </h5>
    
    <img src="../../assets/Property/p1.webp" class="img-fluid" alt=""></div>
     </router-link>
    </div>
    <div class="col-md-4 " data-aos="fade-up" >
     <router-link to="/formToform">
      <div class="p-3  ProjectCard"><h5 class="text-center">
        Form To Form
      </h5>
    <img src="../../assets/FORMTOFORM/1.webp" class="img-fluid" alt="">
    </div>
     </router-link>
    </div>
    <div class="col-md-4 " data-aos="fade-up" >
     <router-link to="/FarmnCho">
      <div class="p-3  ProjectCard"><h5 class="text-center">
        <div class="brand-name">
    Farm<span class="lowered-letter">n</span>Cho
  </div>
      </h5>
    <img src="../../assets/FarmnCho/i2.png" class="img-fluid" alt="">
    </div>
     </router-link>
    </div>
  </div>

   <div class="row mt-4 gx-5 gy-4">
    <h4 class="text-center py-3" >Project At <a href="https://ots.org.pk/" target="_blank" rel="noopener noreferrer" class="UzrATag">OTS (Open Tesing Services)</a>
</h4>

 <div class="col-md-4 " data-aos="fade-up" >
     <router-link to="/publishjob">
      <div class="p-3  ProjectCard ">
      <h5>Publish.jobs</h5>
      <img src="../../assets/OtsProject/website/P1.png" alt="" class="img-fluid">
     </div>
     </router-link>
    </div>
 <div class="col-md-4 " data-aos="fade-up" >
     <router-link to="/employerpublish">
      <div class="p-3  ProjectCard ">
      <h5>employer.publish.jobs/</h5>
      <img src="../../assets/OtsProject/Employer/Employer.png" alt="" class="img-fluid">
     </div>
     </router-link>
    </div>
 <div class="col-md-4 " data-aos="fade-up" >
     <router-link to="/profilepublish">
      <div class="p-3  ProjectCard ">
      <h5>profile.publish.jobs</h5>
      <img src="../../assets/OtsProject/Profile/p1.png" alt="" class="img-fluid">
     </div>
     </router-link>
    </div>
 <div class="col-md-4 " data-aos="fade-up" >
     <router-link to="/accountpublishjob">
      <div class="p-3  ProjectCard ">
      <h5>account.publish.jobs</h5>
      <img src="../../assets/OtsProject/account/a1.png" alt="" class="img-fluid">
     </div>
     </router-link>
    </div>


</div>
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS script

onMounted(() => {
  AOS.init(); // Initialize AOS
});
</script>

<style>
.ProjectCard{
  border: 1px solid var(--Theme-Color);
  border-radius: 10px;
}
.ProjectCard img{
  border-radius: 5px;
  height: 200px;
  width: 100%;
  object-fit: fill;

}
.brand-name {
    font-weight: bold;
  }
  .lowered-letter {
    position: relative; 
    top: 0.2em; /* Adjust this value to move the "n" further down */
  }

  .UzrATag{
    font-size: 16px;
  }
</style>