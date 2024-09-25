<template>
    <div class="project-body">
        <h1>PROJECT {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    name: 'MainProject',
    components: {

    }
}
</script>


<style scoped>
.project-body{
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