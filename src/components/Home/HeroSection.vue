<template>
  <div class="container mt-5 pt-5 mb-5 pb-0 mb-md-5 mainCOntainerSection">
    <div class="row content">
      <!-- Profile Details -->
      <div class="col-sm-12 col-md-12 order-2 order-md-2 col-lg-6 order-lg-1 d-flex align-items-center" data-aos="fade-up">
        <div>
          <h4 class="ProfileName MainHeading">Hello</h4>
          <h4 class="ProfileName MainHeading">I am <span>Waseem</span> Babar</h4>
          <p class="ProfileExperence">I am <span id="typed"></span></p>

          <div class="barcode position-absolute" v-show="barcode">
            <canvas ref="qrCanvas"></canvas>
          </div>

          <!-- Social Links -->
          <div class="SocialLink d-flex mb-5 mb-md-0">
            <div class="me-3 iconDiv">
              <a href="https://www.facebook.com/waseembabar4/" target="_blank"><i class="ion-social-facebook-outline"></i></a>
            </div>
            <div class="me-3 iconDiv ShowBarcodeDiv" @click="openWhatsApp">
              <i class="ion-social-whatsapp-outline"></i>
            </div>
            <div class="me-3 iconDiv">
              <a href="https://twitter.com/waseembabar55" target="_blank"><i class="ion-social-twitter-outline"></i></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/waseem-babar-447480160" target="_blank"><i class="ion-social-linkedin-outline"></i></a>
            </div>
            <div class="ms-3 iconDiv">
              <a class="nav-link BoldText" href="waseemCv.pdf" target="" title="Resume"><i class="bi bi-cloud-arrow-down"></i></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Image -->
      <div class="col-sm-12 col-md-12 col-lg-6 order-1 order-md-1 order-lg-2 d-flex justify-content-center align-items-center" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="450">
        <div class="ProfileDiv">
          <img src="../../assets/ProfileImages.png" alt="HeroImage" class="img-fluid animated-border" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import QRCode from "qrcode";
import Typed from "typed.js";
import 'aos/dist/aos.css';
import AOS from 'aos';

const typedInstance = ref(null);
const qrCanvas = ref(null);
let barcode = ref(false);

const initTyped = () => {
  const options = {
    strings: ["HTML, CSS And Js Developer", "Vue Developer", "Nuxt Developer"],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
  };
  typedInstance.value = new Typed("#typed", options);
};

function openWhatsApp() {
  const phoneNumber = "923359897059"; // Use your country code and phone number
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  window.open(whatsappLink, "_blank");
}

async function renderQRCode() {
  if (!qrCanvas.value) return;
  const phoneNumber = "923359897059"; // Use your country code and phone number
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  try {
    await QRCode.toCanvas(qrCanvas.value, whatsappLink);
  } catch (error) {
    console.error("Error rendering QR code:", error);
  }
}

onMounted(() => {
  AOS.init();
  initTyped();
  renderQRCode();
});
</script>
<style scoped>
.mainCOntainerSection {
  overflow: hidden !important;
}

canvas {
  border-radius: 10px;
  z-index: 200;
  background-color: red !important;
  box-shadow: 0px 0px 0px 6px #e5e5e5;
}

.ProfileName {
  font-size: 3rem !important;
  color: black !important;
  font-weight: 800;
  color: white;
}

.MainHeading {
  color: white !important;
}

.ProfileName span {
  color: var(--Theme-Color);
}

.ProfileExperence {
  font-size: 1.2rem;
  font-weight: 600 !important;
}

.ProfileExperence span {
  color: var(--Theme-Color);
  font-weight: 900 !important;
}

.SocialLink div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 2px solid var(--Theme-Color);
  border-radius: 50%;
}

.SocialLink i {
  font-size: 1.4rem;
  color: var(--Theme-Color);
}
.SocialLink a:hover i {
  font-size: 1.4rem;
  color: white;
}

.SocialLink .iconDiv {
  cursor: pointer;
}

.barcode {
  top: 28%;
  left: 130px;
}

/* Border Animation */
.animated-border {
  position: relative;
  border-radius: 50%;
  padding: 10px;
  border: 5px solid transparent;
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

.ProfileDiv img {
  width: 300px;
  height: 300px;
  image-rendering: pixelated;
}

@media only screen and (max-width: 600px) {
  .ProfileExperence {
    font-size: 0.9rem;
    font-weight: 600 !important;
  }

  .ProfileName {
    font-size: 2rem !important;
    font-weight: 800;
    color: white;
  }
}
</style>
