<template>
  <button 
    @click="toggleTheme" 
    class="btn btn-outline-secondary rounded-circle"
    :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
  >
    <i :class="isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-bs-theme', theme)
  localStorage.setItem('theme', theme)
  isDark.value = theme === 'dark'
}

const toggleTheme = () => {
  const newTheme = isDark.value ? 'light' : 'dark'
  setTheme(newTheme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  setTheme(savedTheme)
})
</script>

<style scoped>
button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
