import { createApp } from 'vue'
import store from './store'
import route from './router'
import App from './App.vue'

createApp(App)
    .use(store)
    .use(route)
    .mount('#app')
