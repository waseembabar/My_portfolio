<template>
   
    <div class="contact-section py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center mb-5">
                <span class="badge bg-primary bg-opacity-10 text-primary mb-3">Available 24/7</span>
                <h2 class="display-5 fw-bold mb-3 ">Get In Touch With Us</h2>
                <p class="lead text-muted">We're always here to help you with any questions or inquiries.</p>
            </div>
        </div>
        
        <div class="row g-4 justify-content-center">
            <!-- Location Card -->
            <div class="col-md-4">
                <div class="contact-card card h-100 border-0 shadow-sm hover-lift">
                    <div class="card-body p-4 text-center">
                        <div class="icon-circle bg-primary bg-opacity-10 text-primary mb-4 mx-auto">
                            <i class="bi bi-geo-alt fs-3"></i>
                        </div>
                        <h5 class="card-title mb-3">Our Location</h5>
                        <p class="card-text text-muted">Bahria Town  Phase 6 Bahria Town, Rawalpindi, Pakistan</p>
                        <a href="https://maps.app.goo.gl/25xHPUCGyZitq7VJA" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="btn btn-link text-primary p-0 mt-2">
                            View on Map <i class="bi bi-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Phone Card -->
            <div class="col-md-4">
                <div class="contact-card card h-100 border-0 shadow-sm hover-lift">
                    <div class="card-body p-4 text-center">
                        <div class="icon-circle bg-success bg-opacity-10 text-success mb-4 mx-auto">
                            <i class="bi bi-telephone fs-3"></i>
                        </div>
                        <h5 class="card-title mb-3">Call Us</h5>
                        <p class="card-text text-muted">Available anytime for your questions</p>
                        <a href="tel:03369420537" class="btn btn-link text-success p-0 mt-2">0336 9420537</a>
                    </div>
                </div>
            </div>
            
            <!-- Email Card -->
            <div class="col-md-4">
                <div class="contact-card card h-100 border-0 shadow-sm hover-lift">
                    <div class="card-body p-4 text-center">
                        <div class="icon-circle bg-danger bg-opacity-10 text-danger mb-4 mx-auto">
                            <i class="bi bi-envelope fs-3"></i>
                        </div>
                        <h5 class="card-title mb-3">Email Us</h5>
                        <p class="card-text text-muted">We'll respond within 24 hours</p>
                        <a href="mailto:waseembabar55@gmail.com" class="btn btn-link text-danger p-0 mt-2">waseembabar55@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script setup>

</script>

<style  scoped>
   
    .icon-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contact-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .lead{
        color: rgb(119, 118, 116) !important;
    }

@keyframes zoom {
    0% {
        color: red; /* Initial size */
        font-size: 1.1rem;
    }
    50% {
       color: rgba(255, 0, 0, 0.459); /* Zoomed out size */
       font-size: 1.1rem;

    }
    100% {
        color: red; /* Back to initial size */
        font-size: 1.1rem;

    }
}

.zoom-animation {
    animation: zoom 2s infinite; /* 2 seconds duration, infinite */
}


.AdressSectionDiv{
    margin-top: 8px !important;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.AdressSectionDiv i {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    font-size: 1.2rem;
    border: 1px solid var(--Theme-Color);
    color: var(--Theme-Color);
    border-radius: 50%;
    padding: 0px;
    margin: 0px;
}
h5{
    font-size: 1.1rem;
}
.AdressSectionDiv{
    font-size: .8rem;
}

/* Small Tablets & Large Phones (576px to 767px) */
@media (min-width: 576px) and (max-width: 767px) {
    .AdressSectionDiv{
    margin-top: 8px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
}

/* Phones (up to 575px) */
@media (max-width: 575px) {
    .AdressSectionDiv{
    margin-top: 8px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
}

/* Extra Small Devices (up to 400px) */
@media (max-width: 400px) {
    .AdressSectionDiv{
    margin-top: 8px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
}
</style>