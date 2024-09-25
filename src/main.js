import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import MainHome from './MainHome.vue'
import MainExperience from './MainExperience.vue'
import MainProject from './MainProject.vue'

import { createBootstrap } from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const routes = [
    { path: '/', component: MainHome },
    { path: '/experience', component: MainExperience },
    { path: '/project/:id', component: MainProject },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


const app = createApp(App)
app.use(router)
app.use(createBootstrap())
app.mount('#app')

