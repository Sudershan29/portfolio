<script>
import { defineComponent, beforeMount, ref, onMounted, onUnmounted } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { BCard, BCardText, BContainer, BRow, BCol } from 'bootstrap-vue-next';
import ProjectTitle from './ProjectTile/ProjectTile.vue'
import 'vue3-carousel/dist/carousel.css'
import Multiselect from 'vue-multiselect'

import { getProjectList } from '@/mock/api/Project'

export default {
    name: 'ProjectSection',
    data() {
        return {
            projectList: [],
            values: [],
            options: [
              { name: 'Done', short: '✔️' },
              { name: 'Working', short: '👨‍💻' },
              { name: 'Starting', short: '🤔' }
            ],
            itemsToShow: 3.95
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        ProjectTitle,
        // BContainer, 
        // BRow, 
        // BCol,
        // Multiselect
    },
    methods: {
        fetchProjectList() {
            this.projectList = getProjectList()
        },
        updateItemsToShow() {
            if (window.innerWidth < 768) {
                this.itemsToShow = 1
            } else if (window.innerWidth < 1024) {
                this.itemsToShow = 2
            } else {
                this.itemsToShow = 3.95
            }
        }
    },
    beforeMount() {
        this.fetchProjectList()
    },
    mounted() {
        this.updateItemsToShow()
        window.addEventListener('resize', this.updateItemsToShow)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateItemsToShow)
    }
}
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

        <!-- <BContainer>
          <BRow>
              <BCol md="6">
                <p>
                  p
                </p>
              </BCol>
              <BCol offset="4" md="2">
                <div><label class="typo__label">Simple select / dropdown</label>
                <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
                  <template #selection="{ values, isOpen }">
                    <span class="multiselect__single"
                          v-if="values.length"
                          v-show="!isOpen">{{ values.length }} options selected</span>
                  </template>
                </multiselect>
                <pre class="language-json"><code>{{ value }}</code></pre>
              </div>
              </BCol>
          </BRow>
        </BContainer> -->
        <Carousel :itemsToShow="itemsToShow" :wrapAround="true" :transition="500" :autoplay="5000">
            <Slide v-for="project in projectList" :key="project.id">
                <div class="carousel__item">
                    <ProjectTitle
                        :title="project.name"
                        :description="project.description"
                        :id="project.id"
                        :githubLink="project.githubLink"
                        :techStack="project.techStack"
                        :status="project.status"
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


<style lang="sass" scoped>
.project__section
  background: var(--color-background-primary)
  border-radius: 10px
  margin: 3px

.section__title
  display: flex
  flex-direction: row
  justify-content: center
  align-items: flex-end
  color: var(--color-text-primary)
  padding-top: 10px

.carousel__slide
  padding: 60px
  opacity: 0.9
  transform: rotateY(-20deg) scale(0.9)

  &--sliding
    transition: 0.5s

  &--active
    opacity: 1
    transform: rotateY(0) scale(1.1)

    & ~ .carousel__slide
      transform: rotateY(20deg) scale(0.9)

  &--prev
    opacity: 1
    transform: rotateY(-10deg) scale(0.95)

  &--next
    opacity: 1
    transform: rotateY(10deg) scale(0.95)

.carousel__viewport
  perspective: 2000px

.carousel__track
  transform-style: preserve-3d

.carousel__prev,
.carousel__next
  box-sizing: content-box
  border: 5px solid white

@media (max-width: 768px)
  .carousel__slide
    padding: 20px
    transform: none

    &--active
      transform: none

      & ~ .carousel__slide
        transform: none

    &--prev, &--next
      transform: none

  .carousel__viewport
    perspective: none

  .carousel__track
    transform-style: flat
</style>
