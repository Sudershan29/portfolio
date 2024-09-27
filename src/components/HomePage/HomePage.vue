<template>
    <div class="portfolio-container">
      <div class="content-wrapper">
        <div class="gradient-overlay"></div>
        <div class="content">
          <h1 class="title">
            {{ typedText }}
          </h1>
          <p class="subtitle">
            Welcome to my portfolio website
          </p>
          <div class="background-image">
            <img
              src="@/assets/me.jpg"
              alt="its me in Jackson Hole"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const typedText = ref('')
  const fullText = 'Hi! I am Sudershan Sridhar'
  const typingSpeed = 150
  const backspaceSpeed = 50
  
  const typeText = async () => {
    for (;;) {
      for (let i = 1; i <= fullText.length; i++) {
        typedText.value = fullText.slice(0, i)
        await new Promise(resolve => setTimeout(resolve, typingSpeed))
      }
      await new Promise(resolve => setTimeout(resolve, 1000))
      for (let i = fullText.length; i > 0; i--) {
        typedText.value = fullText.slice(0, i)
        await new Promise(resolve => setTimeout(resolve, backspaceSpeed))
      }
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }
  
  onMounted(() => {
    typeText()
  })
  </script>
  
  <style scoped>
  .portfolio-container {
    min-height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 5rem;
  }
  
  .content-wrapper {
    width: 99vw;
    background-color: #111;
    border-radius: 0.5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    position: relative;
  }
  
  .gradient-overlay {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to bottom right, #ea580c, #000000);
    opacity: 0.5;
    z-index: 0;
  }
  
  .content {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    z-index: 10;
  }
  
  .title {
    font-size: 3.75rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #fb923c;
  }
  
  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #fed7aa;
  }
  
  .background-image {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0.3;
  }
  
  .background-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>