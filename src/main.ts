import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.css'
import App from '@/App.vue'
import router from '@/router'
import { ClickOutside } from '@/directives/clickOutside'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('click-outside', ClickOutside)

app.mount('#app')
