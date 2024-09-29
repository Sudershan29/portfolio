<template>
    <BContainer fluid class="header">
        <BRow class="w-100 mx-0">
            <BCol xs="1" class="center">
                <RouterLink to="/">
                    <div class="logo">
                        <img id="website-logo" alt="Vue logo" src="@/assets/logo-light.png">
                    </div>
                </RouterLink>
            </BCol>

            <BCol xs="4" style="padding: 10px">
                <!-- <div class="name-display">
                    TODO: GET AN ANIMATION OF THE TEXT
                    <span class="first-name">Sudershan.</span>
                    <span class="last-name">Sridhar</span>
                </div> -->
            </BCol>

            <BCol offset="2" xs="2" class="d-flex justify-content-center align-items-center" style="padding-top: 15px">
                <!-- All links -->
                <nav class="desktop-nav">
                    <RouterLink class="router-link" to="/"><p class="router-text">Home</p></RouterLink>
                    <RouterLink v-if:="$store.getters.isWorkMode" class="router-link" to="/experience"><p class="router-text">Experience</p></RouterLink>
                    <RouterLink v-if:="$store.getters.isNotWorkMode" class="router-link" to="/photography"><p class="router-text">Photography</p></RouterLink>
                    <RouterLink v-if:="$store.getters.isNotWorkMode" class="router-link" to="/activity"><p class="router-text">Activities</p></RouterLink>
                </nav>

                <!-- Mobile nav -->
                <div class="mobile-nav">
                    <div class="sandwich" @click="toggleSidebar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <!--  Sidebar -->
                <!-- TODO: Fix autoclose of the sidebar -->
                <div v-if="showSidebar" class="sidebar" v-on:blur="toggleSidebar">
                    <div @click="toggleSidebar">X</div>
                    <RouterLink class="router-link" to="/"><p class="router-text">Home</p></RouterLink>
                    <RouterLink v-if:="$store.getters.isWorkMode" class="router-link" to="/experience"><p class="router-text">Experience</p></RouterLink>
                    <RouterLink v-if:="$store.getters.isNotWorkMode" class="router-link" to="/photography"><p class="router-text">Photography</p></RouterLink>
                    <RouterLink v-if:="$store.getters.isNotWorkMode" class="router-link" to="/activity"><p class="router-text">Activities</p></RouterLink>
                </div>

            </BCol>

        </BRow>

    </BContainer>
</template>

<script>
import { RouterLink } from 'vue-router';
import { BRow, BCol, BContainer } from 'bootstrap-vue-next';

export default {
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        }
    },
    components: {
        BRow, BCol, BContainer
    }
}
</script>

<style lang="sass" scoped>
.header
  background: var(--color-background-primary)
  color: var(--color-text-primary)
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1)
  border-radius: 10px
  font-family: 'Montserrat', sans-serif
  width: 100%
  max-width: 100%
  margin-right: 15px
  padding: 0

.center
    display: flex
    justify-content: center

.logo
  width: 60px

.desktop-nav
  display: flex
  gap: 10px

.mobile-nav
  display: none

.sandwich
  width: 30px
  height: 20px
  position: relative
  cursor: pointer
  background-color: #f4f4f4

  span
    display: block
    position: absolute
    height: 2px
    width: 100%
    background: #121212
    transition: all 0.3s ease

    &:nth-child(1)
      top: 0

    &:nth-child(2)
      top: 50%
      transform: translateY(-50%)

    &:nth-child(3)
      bottom: 0

.router-text
    color: var(--color-text-primary)

.sidebar
  padding-top: 50px
  display: flex
  flex-direction: column
  gap: 50px
  position: fixed
  right: 0
  top: 0
  width: 250px
  height: 100%
  background: var(--color-background-primary)
  color: var(--color-text-primary)
  box-shadow: -5px 0px 15px rgba(0, 0, 0, 0.1)
  transition: all 1s ease
  font-family: 'Montserrat', sans-serif
  z-index: 1000
  border-radius: 30px

@media (max-width: 768px)
  .desktop-nav
    display: none

  .mobile-nav
    display: block

#website-logo
  width: 50px
  height: 50px
  margin: 10px

.router-link
  text-decoration: none
  color: inherit
  font-weight: bold
  color: var(--color-text-primary)
  font-family: 'Montserrat', sans-serif

.name-display
    font-family: 'Arial', sans-serif
    font-size: 1.5rem
    font-weight: bold
    letter-spacing: 1px
    background: linear-gradient(45deg, var(--color-accent), var(--color-text-primary))
    -webkit-background-clip: text
    background-clip: text
    -webkit-text-fill-color: transparent
    padding: 10px
    transition: all 0.3s ease

.dot
    color: var(--color-accent)
    margin: 0 2px
    animation: pulse 1.5s infinite

@keyframes pulse
    0%, 100%
        opacity: 1
    50%
        opacity: 0.5
</style>
