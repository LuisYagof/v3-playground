import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.css'
import App from '@/App.vue'
import router from '@/router'
import { ClickOutside } from '@/directives/clickOutside'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.directive('click-outside', ClickOutside)
router.isReady().then(() => {
  app.mount('#app')
})
