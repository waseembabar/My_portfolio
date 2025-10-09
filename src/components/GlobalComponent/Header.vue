<template>
 
 


<div class="scroll-Watcher">

</div>
</template>

<script setup>

</script>

<style  scoped>
.scroll-Watcher{
  
  position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: brown;
    z-index: 1000;
    scale: 0 1;
    transform-origin: top left;
    animation: scroll-indicator linear;
    animation-timeline: scroll(y);
}

@keyframes scroll-indicatorr {
  to {
    scale: 1 1;
  }
}
.LogoImage span{
  color:var(--Theme-Color);
}
ul li{
  position: relative;
}
ul li a{
  color: black;
}
ul li a:hover{
  color: var(--Theme-Color) !important;
}

ul li a::after {
  content: "";
  position: absolute;
  width: 80%;
  height: 2px;
  border-radius: 5px;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent; /* Initially transparent */
  transition: background-color 2.22s ease; /* Transition effect for background-color */
}
ul li a:hover::after {
  background-color: var(--Theme-Color); /* Change to desired color on hover */
}
</style>