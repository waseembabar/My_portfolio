  <template>
  <div class="container pt-4">
    <div class="row">
      <h4 class="text-center MainHeading  pt-3 pb-0 m-0 pt-md-5">Service </h4>
      <p class="text-center mainParagraph">What I Do</p>
    </div>
    <!-- cards section  -->
    <div class="row pt-3 pt-md-5">
      <div class="container bg-white text-center">
        <div class="row gy-3 gx-3">
          <div class="col-12 col-sm-12 col-md-4" data-aos="fade-up">
            <div class="p-3 cards">
              <div>
                <i class="bi bi-code"></i>
                <p>HTML CSS JS Project</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4" data-aos="fade-up">
            <div class="p-3 cards">
              <div>
                <i class="bi bi-pc-display-horizontal"></i>
                <p>Desktop App</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4" data-aos="fade-up">
            <div class="p-3 cards">
              <div>
                <i class="bi bi-phone"></i>
                <p>Mobile Frindly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row g-3 pt-3 pt-md-4">
      <h4 class="MainHeading text-center mt-2 mt-4 mb-0 MainHeading">Skills</h4>

      <p class="SmallText text-center">
       A web development expert specializing in HTML,
        CSS, JavaScript, Bootstrap, Vue 3, and Nuxt, to create visually
        stunning, user-friendly websites that leave a lasting impression.
      </p>
    </div>
  </div>
  <marquee
    direction="left"
    onmousedown="this.stop();"
    onmouseup="this.start();"
  >
    <div class="mainDiv">
      <img src="../../assets/Sklls/HTML.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/pngwing.com.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/SASS.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/Tailwind.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/Bootstrap.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/GSAP.webp" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/AOS.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/Js.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/Vue.svg" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/NUXT.jpeg" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/Git.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/Github.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/Basic PHP.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/RestApi.png" class="img-fluid" alt="" />
      <img src="../../assets/Sklls/firebase.png" class="img-fluid" alt="" />
    </div>
  </marquee>
</template>

  <script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS on component mount
onMounted(() => {
  AOS.init({
    duration: 600, // Animation duration
  });
});
</script>

  <style  scoped>
marquee img {
  height: 50px;
  width: 50px;
  margin: 0px 5px;
  border-radius: 50%;
}

.progress {
  height: 10px;
  background-color: #000000 !important;
  color: white !important;
}
.progress-bar {
  background-color: var(--Theme-Color) !important;
  color: white !important;
}
div {
  background-color: #000000 !important;
  color: white !important;
}
.cards {
  /* border: 1px solid black; */
  border-radius: 5px;

  box-shadow: 0px 0px 2px var(--Theme-Color);
  background-color: #000000 !important;
  color: white !important;
}
.cards div {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.cards i {
  font-size: 2.5rem;
}
</style>