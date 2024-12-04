import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import '@/assets/css/themes.css';
import App from './App.vue'
import MainHome from './MainHome.vue'
import MainExperience from './MainExperience.vue'
import MainProject from './MainProject.vue'
import MainPhotography from './MainPhotography.vue';
import MainActivity from './MainActivity.vue';
import MainMaps from './MainMaps.vue';
import store from './store'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

import { createBootstrap } from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const routes = [
    { path: '/', component: MainHome },
    { path: '/experience', component: MainExperience },
    { path: '/photography', component: MainPhotography },
    { path: '/activity', component: MainActivity },
    { path: '/project/:id', component: MainProject },
    { path: '/maps', component: MainMaps },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


const app = createApp(App)
app.use(router)
app.use(store)
app.use(createBootstrap())
app.mount('#app')

