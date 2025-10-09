<template>
    <div class="container mt-5 pt-md-5  mb-5 pb-0 mb-md-5" >
        <div class="row mt-0 mt-md-5" >
            <div class="col-sm-12 col-md-3" data-aos-delay="50" data-aos="fade-up">
               <div class="AboutImageDiv " style=" animation: border-motion 3s infinite linear;">
                <img src="../../assets/AboutUsSection.png" alt="" class="">
           
               </div>

               
            </div>
            <div class="col-sm-12 col-md-9" data-aos-delay="50" data-aos="fade-down">
                <h4 class="MainHeading">Waseem Babar</h4>
                <p class="Skil">Front End Developer</p>
               <p class="SmallText">I'm Waseem Babar, leading a skilled team in HTML, CSS, JavaScript, Vue 3, and Nuxt.js to create dynamic, user-focused web experiences. We merge design with functionality, using cutting-edge web technologies to realize your vision. Let’s collaborate to enhance your online presence and build something exceptional in the digital space.</p>
                
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>




.AboutImageDiv{
    position: relative;
    margin: 0px auto;
    display: flex;align-content: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid var(--Theme-Color);
    animation: border-motion 3s infinite linear;
}
@keyframes border-motion {
  0% {
    border-color: transparent;
  }
  25% {
    border-color: var(--Theme-Color-3); /* New color */
  }
  50% {
    border-color: var(--Theme-Color); /* New color */
  }
  75% {
    border-color: var(--Theme-Color-3); /* New color */
  }
  100% {
    border-color: transparent;
  }
}
.AboutImageDiv img{
    height: 65%;
    width: 65%;
}
</style>