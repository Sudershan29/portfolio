<template>
  <div class="wrapper">
    <PortfolioHeader />
      <RouterView />
    <PortfolioFooter />
  </div>
</template>

<script>

import PortfolioHeader from './components/PortfolioHeader/PortfolioHeader.vue'
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter.vue'
// import ProjectSection from './components/ProjectSection/ProjectSection.vue'

export default {
  name: 'App',
  components: {
    PortfolioHeader,
    PortfolioFooter,
    // ProjectSection
  },
}
</script>

<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0 !important;
  margin: 5px !important;
  background-color: black;
}
.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}
</style>
