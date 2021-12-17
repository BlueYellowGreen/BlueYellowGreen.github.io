import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
    config: {
        id: "G-23KGQVB87M" // Google Analytics
    }
})

createApp(App).use(router).mount('#app')
