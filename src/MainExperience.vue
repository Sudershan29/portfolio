<template>
    <div class="experience__section">
        <div class="section__title">
            <h1>W</h1>
            <h2>ORK</h2>
            &nbsp;&nbsp;
            <h1>E</h1>
            <h2>XPERIENCE</h2>
        </div>
        <BContainer>
            <WorkExperience v-for="experience in experienceList"
                :key="experience.id" 
                :company="experience.company" 
                :companyLogo="experience.companyLogo" 
                :position="experience.position" 
                :bullets="experience.bullets" 
                :startDate="experience.startDate" 
                :endDate="experience.endDate" 
                :description="experience.description"
            />
        </BContainer>
    </div>
</template>

<script>
import { BRow, BContainer } from 'bootstrap-vue-next';
import { getExperienceList } from './mock/api/Experience';
import WorkExperience from '@/components/Experience/WorkExperience.vue';

export default {
    name: 'MainExperience',
    components: {
        WorkExperience,
        BContainer
    },
    data() {
        return {
            experienceList: [],
        }
    },
    methods: {
        fetchExperienceList() {
            this.experienceList = getExperienceList()
        },
    },
    beforeMount() {
        this.fetchExperienceList()
    },
}
</script>

<style scoped>
.experience__section {
  background: #121212;
  border-radius: 10px;
  margin: 3px;
  min-height: 100vh;
  padding: 40px;
}
.section__title{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    color: #f4f4f4;
    padding-top: 10px;
}

</style>
