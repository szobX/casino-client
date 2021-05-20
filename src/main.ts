import { createApp } from 'vue'
import Socketio from './modules/socket.io'

import './assets/scss/main.scss'
import App from './App.vue'
import router from './router/index'
createApp(App)
    .use(router)
    .use(Socketio, {
        connection: 'http://localhost:3005',
        options: {},
    })
    .mount('#app')
