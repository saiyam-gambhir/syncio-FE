import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import PrimeVue from 'primevue/config'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Password', Password)
  nuxtApp.vueApp.component('Toast', Toast)
})
