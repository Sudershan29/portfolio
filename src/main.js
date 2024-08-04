import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import MainHome from './MainHome.vue'
import MainProfile from './MainProfile.vue'
import MainProject from './MainProject.vue'

const routes = [
    { path: '/', component: MainHome },
    { path: '/profile', component: MainProfile },
    { path: '/project', component: MainProject },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


createApp(App)
    .use(router)
    .mount('#app')

