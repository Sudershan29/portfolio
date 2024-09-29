<template>
    <div class="portfolio-container">
      <div class="content-wrapper">
        <div class="gradient-overlay"></div>
        <div class="content">
          <h1 class="title">
            {{ typedText }}
          </h1>
          <p class="subtitle">
            Welcome to my {{ $store.getters.isWorkMode ? "Work" : "Personal" }} portfolio website
          </p>
          <div class="theme-toggle" style="position: relative; z-index: 10;">
            <BContainer>
              <BRow>
                  <BCol style="justify-content: center; align-items: center;">
                    <span class="theme-icon" v-tooltip="'Work Mode'">💼</span>
                  </BCol>
                  <BCol class="d-flex justify-content-center align-items-center">
                    <label class="switcher">
                        <input type="checkbox" v-model="isDarkTheme" @change="toggleTheme">
                        <span class="slider round"></span>
                    </label>
                  </BCol>
                  <BCol style="justify-content: center; align-items: center;">
                    <span class="theme-icon" v-tooltip="'Personal Mode'">🤝</span>
                  </BCol>
              </BRow>
            </BContainer>
        </div>
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
  
<script>
import store from "../../store.js"
import { BRow, BCol, BContainer } from 'bootstrap-vue-next';
export default {
  data() {
      return {
          isDarkTheme: store.getters.isNotWorkMode
      }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  },
  components: {
    BRow, BCol, BContainer
  },
  watch: {
		isDarkTheme: {
			handler(val) {
                const theme = val ? 'friend' : 'work';
                document.documentElement.setAttribute('data-theme', theme);
                if(val)
                  store.dispatch('switchToFriendsMode')
                else
                  store.dispatch('switchToWorkMode')
			},
			immediate: true
		}
	}
}
</script>

<style lang="sass" scoped>
.portfolio-container
  min-height: 100vh
  color: white
  display: flex
  align-items: center
  justify-content: center
  padding: 1rem
  margin: 5rem

.content-wrapper
  width: 99vw
  background-color: #111
  border-radius: 0.5rem
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
  overflow: hidden
  position: relative

.gradient-overlay
  position: absolute
  inset: 0
  background-image: linear-gradient(to bottom right, #ea580c, #000000)
  opacity: 0.5
  z-index: 0

.content
  position: relative
  height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  padding: 2rem
  text-align: center
  z-index: 10

.title
  font-size: 3.75rem
  font-weight: bold
  margin-bottom: 1.5rem
  color: #fb923c

.subtitle
  font-size: 1.25rem
  margin-bottom: 2rem
  color: #fed7aa

.background-image
  position: absolute
  inset: 0
  z-index: 0
  opacity: 0.3
  
  img
    width: 100%
    height: 100%
    object-fit: cover

.switcher
  position: relative
  display: inline-block
  width: 44px
  height: 22px
  input
      opacity: 0
      width: 0
      height: 0
  .slider
      position: absolute
      cursor: pointer
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: #d7d7d7
      transition: .3s
      &.round
          border-radius: 34px
          &:before
              position: absolute
              content: ""
              height: 16px
              width: 16px
              left: 4px
              bottom: 3px
              background-color: white
              transition: .3s
              border-radius: 50%
  input:checked + .slider
      background-color: var(--color-accent)
  input:checked + .slider:before
      transform: translateX(20px)
</style>