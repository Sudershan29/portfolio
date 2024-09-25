<template>
    <RouterLink 
        :to="{path: '/project/' + id}"
        style="text-decoration: none; color: inherit;"
    >
        <BCard
            header="featured"
            :title="title"
            :img-src="require('@/assets/project-template.gif')"
            :img-alt="title"
            tag="article"
            style="max-width: 100rem; background-color: #f4f4f4;"
            >
            <template #header>
                <BContainer>
                    <BRow style="margin-right: 5px">
                        <BCol lg="1">
                            <a :href="githubLink" target="_blank">
                                <img src="@/assets/notion.png" class="logo"/>
                            </a>
                        </BCol>
                        <BCol offset="10" lg="1">
                            <a :href="githubLink" target="_blank">
                                <img src="@/assets/github.png" class="logo"/>
                            </a>
                        </BCol>
                    </BRow>
                </BContainer>
            </template>
            <BCardText>{{ description }}</BCardText>
            <template #footer>
                <BContainer>
                    <BRow>
                        <FrameworkIcon
                            v-for="framework in techStack"
                            :key="framework"
                            :name="framework"
                            width="30"
                            height="30"
                        />
                    </BRow>
                </BContainer>
            </template>
        </BCard>
    </RouterLink>
</template>

<script>
    import { BCard, BCardText, BContainer, BRow, BCol } from 'bootstrap-vue-next';
    import FrameworkIcon from '@/components/FrameworkIcon/FrameworkIcon.vue';
    export default {
        name: 'ProjectTile',
        props: {
            id: Number,
            title: String,
            description: String,
            githubLink: String,
            techStack: Array,
        },
        components: {
            BCard,
            BCardText,
            FrameworkIcon,
            BRow,
            BCol,
            BContainer
        }
    };
</script>

<style scoped>
.logo{
    width: 20px;
    height: 20px;
}
</style>
