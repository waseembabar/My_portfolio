<template>
  <div class="container pt-4" >
    <div class="row">
      <p class="mainParagraph text-center pt-5 m-0">Testimonial</p>
      <h4 class="MainHeading text-center mb-5">What People Say About Me</h4>
    </div>
  </div>




  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="container-fluid">
          <div class="row">
            <div class="ClickProfileImage text-center mb-4 mt-5">
              <img src="../../assets/User.jpg" alt="">
            </div>
            <div>
              <p class="text-center px-2 px-md-5 pb-md-4">
                Quas minima porro, placeat rem iste reprehenderit praesentium veritatis quo architecto tempora amet, beatae nulla fugiat delectus? Veniam nobis exercitationem adipisci suscipit?
              </p>
              <h6 class="ClientName text-center">Waseem Babar</h6>
              <p class="ClientExpert text-center">CEO of The Mentor Pakistan</p>
            </div>
          </div>
        </div>
    </div>
    <div class="carousel-item">
      <div class="container-fluid">
          <div class="row">
            <div class="ClickProfileImage text-center mb-4 mt-5">
              <img src="../../assets/User.jpg" alt="">
            </div>
            <div>
              <p class="text-center px-2 px-md-5 pb-md-4">
                Quas minima porro, placeat rem iste reprehenderit praesentium veritatis quo architecto tempora amet, beatae nulla fugiat delectus? Veniam nobis exercitationem adipisci suscipit?
              </p>
              <h6 class="ClientName text-center">Waseem Babar</h6>
              <p class="ClientExpert text-center">CEO of The Mentor Pakistan</p>
            </div>
          </div>
        </div>
    </div>
    <div class="carousel-item">
      <div class="container-fluid">
          <div class="row">
            <div class="ClickProfileImage text-center mb-4 mt-5">
              <img src="../../assets/User.jpg" alt="">
            </div>
            <div>
              <p class="text-center px-2 px-md-5 pb-md-4">
                Quas minima porro, placeat rem iste reprehenderit praesentium veritatis quo architecto tempora amet, beatae nulla fugiat delectus? Veniam nobis exercitationem adipisci suscipit?
              </p>
              <h6 class="ClientName text-center">Waseem Babar</h6>
              <p class="ClientExpert text-center">CEO of The Mentor Pakistan</p>
            </div>
          </div>
        </div>
    </div>
  </div>
 
</div>





  <!-- Slider Section Code -->



</template>

<script setup>

</script>

<style scoped>
.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: -45px;
  left: 0;
  
}

/* Style for the carousel indicators */
.carousel-indicators button {
  height: 10px;
  width: 10px;
  background-color: var(--Theme-Color) !important;
  border: none; /* Remove the border */
}

/* Style for the active carousel indicator */
.carousel-indicators button.active {
  background-color:#9b22c5 !important; /* Change the background color for the active indicator */
}

/* Adjustments for the profile image */
.testmonialImage {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  padding: 5px;
  border: 1px solid black;
}

.ClickProfileImage {
  border: 1px solid var(--Theme-Color);
  text-align: center;
  margin: 0px auto;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.carousel {
  width: 70%;
  margin: 0px auto;
  box-shadow: 0px 0px 4px gray;
}
</style>
