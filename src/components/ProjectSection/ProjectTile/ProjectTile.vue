<template>
    <RouterLink 
        :to="{path: '/project/' + id}"
        style="text-decoration: none; color: inherit;"
    >
        <BCard
            header="featured"
            :title="title"
            :img-src="getProjectImage(id)"
            :img-alt="title"
            tag="article"
            class="project-card"
            >
            <template #header>
                <BContainer>
                    <BRow>
                        <BCol xl="1">
                            <a :href="githubLink" target="_blank">
                                <img src="@/assets/notion.png" class="logo"/>
                            </a>
                        </BCol>
                        <BCol offset="9" xl="1">
                            <a :href="githubLink" target="_blank">
                                <img src="@/assets/github.png" class="logo"/>
                            </a>
                        </BCol>
                    </BRow>
                </BContainer>
            </template>
            <BCardText class="description">
                <BContainer>
                    <BRow>
                        {{ description }}
                    </BRow>
                    <BRow>
                        <BCol offset="8" md="4">
                            <!-- TODO: Fix this hover -->
                            <div :class="getStyle(status)" id="status" :title="getStatusTooltip(status)">
                                {{ status }}
                                <div id="hover-content">
                                    {{ getStatusTooltip(status) }}
                                </div>
                            </div>
                        </BCol>
                    </BRow>
                </BContainer>
            </BCardText>
            <template #footer>
                <BContainer>
                    <BRow align-h="center" align-content="center">
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
            status: String
        },
        components: {
            BCard,
            BCardText,
            FrameworkIcon,
            BRow,
            BCol,
            BContainer
        },
        methods: {
            getProjectImage(id) {
                const extensions = ['jpg', 'png', 'gif'];
                for (const ext of extensions) {
                    try {
                        return require(`@/assets/project/${id}.${ext}`);
                    } catch (e) {
                        continue;
                    }
                }
                return null; // Return null if no matching image is found
            },
            getStyle(style) {
                if(style == "👨‍💻") return "rounded-pending-button"
                if(style == "✔️") return "rounded-done-button"
                if(style == "🤔") return "rounded-start-button"
                return "rounded-pending-button";
            },
            getStatusTooltip(style){
                if(style == "👨‍💻") return "Developing!"
                if(style == "✔️") return "Done :)"
                if(style == "🤔") return "Generating ideas!"
                return "rounded-pending-button";
            }
        }
    };
</script>

<style lang="sass" scoped>
.logo
  width: 20px
  height: 20px

.project-card
  width: 20rem
  height: 40rem
  background-color: #f4f4f4
  display: flex
  flex-direction: column

.description
  flex-grow: 1
  overflow-y: auto

.rounded-done-button
  background: green
  color: white
  border-radius: 15px
  min-width: 70px
  box-shadow: #000 20px

.rounded-pending-button
  background: yellow
  color: black
  border-radius: 15px
  min-width: 70px
  box-shadow: #000 20px

.rounded-start-button
  background: red
  color: white
  border-radius: 15px
  min-width: 70px
  box-shadow: #000 20px

#hover-content
  display: none

#parent:status #hover-content
  display: block
</style>
