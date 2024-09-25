
<script>
import { BCardBody, BCardSubtitle, BCardImg, BCard, BRow, BCol, BCardText, BContainer } from 'bootstrap-vue-next';

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
        companyLogo: String
    },
    components: {
        BRow,
        BCol,
        BCard,
        BCardImg,
        // BCardSubtitle,
        BCardBody,
        BCardText,
        BContainer
    }
};
</script>

<template>
    <BRow style="margin: 20px;">
        <BCard
            class="overflow-hidden" 
            :title="company"
            bg-variant="dark"
            text-variant="white"
            border-variant="dark"
        >   
            <template #header>
                <BRow>
                    <BCol offset="10" md="2"> {{ startDate }} - {{ endDate }}</BCol>
                    <!-- <BCol><strong>Start Date:</strong> {{ startDate }}</BCol>
                    <BCol><strong>End Date:</strong> {{ endDate }}</BCol> -->
                </BRow>
            </template>
            <template #footer>
                <BRow>
                    <BCol> <strong> Add frameworks here </strong> </BCol>
                    <!-- <BCol><strong>Start Date:</strong> {{ startDate }}</BCol>
                    <BCol><strong>End Date:</strong> {{ endDate }}</BCol> -->
                </BRow>
            </template>
            <BContainer>
                <BRow>
                    <BCol md="3">
                        <BCardImg :src="companyLogo" alt="Image" class="card-img" />
                    </BCol>
                    <BCol md="6">
                        <BCardBody>
                            <BCardText>
                                {{ description }}
                            </BCardText>
                        </BCardBody>
                    </BCol>
                </BRow>
                <BRow>
                    <ul>
                        <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
                    </ul>
                </BRow>
            </BContainer>
        </BCard>
    </BRow>
</template>


<style scoped>
ul {
    padding-left: 20px;
    list-style-type: disc;
}
.card-img { 
    width: 45px;
    height: 40px;
    border-radius: 5%;
}
</style>