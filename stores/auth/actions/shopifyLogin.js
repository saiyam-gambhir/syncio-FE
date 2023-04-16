//import router from '@/router'
import { useConnectionsStore } from '~/stores/connections'

export const shopifyLogin = {
  async shopifyLogin(platform, storeName) {
    this.loading = true
    const { data: { value } } = await useMyPost('user/platforms/login', {
      onResponse({ request, response, options }) {
        window.sessionStorage.setItem('ID_TOKEN_KEY', response.headers.get('x-syncio-app-token'));
      },
      body: {
        platform,
        store_name: storeName
      }
    })
    const { success, user } = value
    if(success) this.user = await user

    const connections = useConnectionsStore()
    if (window.sessionStorage.getItem('ID_TOKEN_KEY')) {
      this.isAuthenticated = true
      sessionStorage.setItem('USER_ID', this.user?.id)
      await connections.fetchCurrentStore()
      await this.fetchCurrentPlan(sessionStorage.getItem('USER_ID'))
      //router.replace('/')
      this.loading = false
    }
  }
}
