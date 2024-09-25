<script>
import { defineComponent, beforeMount } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import ProjectTitle from './ProjectTile/ProjectTile.vue'
import 'vue3-carousel/dist/carousel.css'

import { getProjectList } from '@/mock/api/Project'

export default defineComponent({
    name: 'ProjectSection',
    data() {
        return {
            projectList: [],
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        ProjectTitle,
    },
    methods: {
        fetchProjectList() {
            this.projectList = getProjectList()
        },
    },
    beforeMount() {
        this.fetchProjectList()
    },
})
</script>

<template>
    <div class="project__section">
        <div class="section__title">
            <h1>P</h1>
            <h2>ERSONAL</h2>
            &nbsp;&nbsp;
            <h1>P</h1>
            <h2>ROJECTS</h2>
        </div>
        <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" :autoplay="5000">
            <Slide v-for="project in projectList" :key="project.id">
                <div class="carousel__item">
                    <ProjectTitle
                        :title="project.name"
                        :description="project.description"
                        :id="project.id"
                        :githubLink="project.githubLink"
                        :techStack="project.techStack"
                    />
                </div>
            </Slide>
            <template #addons>
                <Pagination />
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>


<style scoped>
.project__section {
  background: #121212;
  border-radius: 10px;
  margin: 3px;
}

.section__title{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    color: #f4f4f4;
    padding-top: 10px;
}

.carousel__slide {
  padding: 60px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

