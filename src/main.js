import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueGtag from 'vue-gtag-next'


const app = createApp(App)
// createApp(App).use(router).mount('#app')

app.use(router)

app.use(VueGtag, {
    property: {
        id: "G-23KGQVB87M"
    }
})

app.mount("#app")
