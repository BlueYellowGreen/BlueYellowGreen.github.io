import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueGtag from 'vue-gtag-next'
import { createMetaManager } from 'vue-meta'


const app = createApp(App)

app.use(router)

app.use(VueGtag, {
    property: {
        id: "G-23KGQVB87M"
    }
})

app.use(createMetaManager())

app.mount("#app")
