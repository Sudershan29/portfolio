<template>
    <div class="home-body">
        <h1>Main Home</h1>
    </div>
    <div>
        <ProjectSection />
    </div>
</template>

<script>

import ProjectSection from './components/ProjectSection/ProjectSection.vue';
export default {
    name: 'MainHome',
    components: {
        ProjectSection
    }
}
</script>


<style scoped>
.home-body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #121212;
    color: #f4f4f4;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 10px;
    margin: 3px;
}
</style>