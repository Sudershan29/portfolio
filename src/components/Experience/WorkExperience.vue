<script>
import { BCardBody, BCardImg, BCard, BRow, BCol, BCardText, BContainer } from 'bootstrap-vue-next';
import FrameworkIcon from "../FrameworkIcon/FrameworkIcon.vue"

export default {
    name: 'WorkExperience',
    props: {
        id: Number,
        company: String,
        position: String,
        techStack: Array,
        startDate: String,
        endDate: String,
        bullets: Array,
        description: String,
        companyLogo: String,
    },
    components: {
        BRow,
        BCol,
        BCard,
        BCardImg,
        BContainer,
        FrameworkIcon
    }
};
</script>

<template>
    <BRow class="my-4">
        <BCard
            class="overflow-hidden shadow-lg animate__animated animate__fadeInUp"
            bg-variant="light"
            border-variant="primary"
        >
            <template #header>
                <BRow>
                    <BCol md="12">
                        <h4 class="text-primary">{{ company }}</h4>
                        <h6 class="text-muted">{{ position }}</h6>
                    </BCol>
                </BRow>
                <BRow>
                    <BCol class="text-right" md="2" offset="10">
                        <span class="text-secondary">{{ startDate }} - {{ endDate }}</span>
                    </BCol>
                </BRow>
            </template>

            <BContainer class="mt-3">
                <BRow>
                    <BCol md="3" class="d-flex align-items-center justify-content-center">
                        <BCardImg :src="companyLogo" alt="Company Logo" class="rounded-circle shadow-sm img-fluid" style="width: 125px;" />
                    </BCol>
                    <BCol md="9">
                        <ul class="custom-list">
                            <li v-for="bullet in bullets" :key="bullet" class="list-item">{{ bullet }}</li>
                        </ul>
                    </BCol>
                </BRow>
            </BContainer>

            <template #footer>
                <BRow align-h="center" align-content="center">
                    <FrameworkIcon
                        v-for="framework in techStack"
                        :key="framework"
                        :name="framework"
                        width="30"
                        height="30"
                    />
                </BRow>
            </template>
        </BCard>
    </BRow>
</template>

<style lang="sass" scoped>
.card-img
    width: 60px
    height: 60px
    border-radius: 50%
    border: 2px solid #007bff
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)

.custom-list
    text-align: left
    padding-left: 1.2rem
    list-style-type: disc
    color: #333
    font-size: 0.95rem

.list-item
    margin-bottom: 5px

.tech-stack
    margin-top: 10px

.badge-primary
    background-color: #007bff
    color: white

h4
    font-weight: bold

h6
    font-weight: 600
    margin-bottom: 0
    font-style: italic
    color: #6c757d

// Animate.css

// Fade In
@keyframes fadeIn
    from
        opacity: 0
    to
        opacity: 1

.animate__fadeIn
    animation-name: fadeIn
    animation-duration: 1s
    animation-fill-mode: both

// Fade In Up
@keyframes fadeInUp
    from
        opacity: 0
        transform: translate3d(0, 40px, 0)
    to
        opacity: 1
        transform: none

.animate__fadeInUp
    animation-name: fadeInUp
    animation-duration: 1s
    animation-fill-mode: both

// Fade Out
@keyframes fadeOut
    from
        opacity: 1
    to
        opacity: 0

.animate__fadeOut
    animation-name: fadeOut
    animation-duration: 1s
    animation-fill-mode: both

// Bounce
@keyframes bounce
    0%, 20%, 50%, 80%, 100%
        transform: translateY(0)
    40%
        transform: translateY(-30px)
    60%
        transform: translateY(-15px)

.animate__bounce
    animation-name: bounce
    animation-duration: 2s
    animation-fill-mode: both

// Slide In Left
@keyframes slideInLeft
    from
        transform: translate3d(-100%, 0, 0)
        visibility: visible
    to
        transform: translate3d(0, 0, 0)

.animate__slideInLeft
    animation-name: slideInLeft
    animation-duration: 1s
    animation-fill-mode: both

// Slide Out Right
@keyframes slideOutRight
    from
        transform: translate3d(0, 0, 0)
    to
        transform: translate3d(100%, 0, 0)
        visibility: hidden

.animate__slideOutRight
    animation-name: slideOutRight
    animation-duration: 1s
    animation-fill-mode: both

// Zoom In
@keyframes zoomIn
    from
        opacity: 0
        transform: scale3d(0.3, 0.3, 0.3)
    50%
        opacity: 1

.animate__zoomIn
    animation-name: zoomIn
    animation-duration: 1s
    animation-fill-mode: both

// Zoom Out
@keyframes zoomOut
    from
        opacity: 1
    50%
        opacity: 0
        transform: scale3d(0.3, 0.3, 0.3)
    to
        opacity: 0

.animate__zoomOut
    animation-name: zoomOut
    animation-duration: 1s
    animation-fill-mode: both
</style>