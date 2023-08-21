import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

import vue3GoogleLogin from 'vue3-google-login'

const CLIENT_ID='595426291309-sp9u6e87q6gsjlhrfof9kc4cj3pnvhhr.apps.googleusercontent.com'

createApp(App)

 .use(vue3GoogleLogin,

    {

        clientId: CLIENT_ID,

    })

.use(store).use(router).mount('#app')