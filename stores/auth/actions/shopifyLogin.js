//import router from '@/router'
//import { useConnectionsStore } from '~/stores/connections'

export const shopifyLogin = {
  async shopifyLogin(platform, storeName) {
    this.loading = true
    const { data } = await useMyFetch('user/platforms/login')
    console.log(data)
    // const connections = useConnectionsStore()
    // const response = await this.$https.post('user/platforms/login', {
    //   platform: platform,
    //   store_name: storeName,
    // })
    // if(response.data.success) {
    //   this.user = await response.data.user
    // }
    // window.sessionStorage.setItem('ID_TOKEN_KEY', response.headers['x-syncio-app-token']);
    // if (window.sessionStorage.getItem('ID_TOKEN_KEY')) {
    //   this.isAuthenticated = true
    //   sessionStorage.setItem('USER_ID', this.user?.id)
    //   this.$https.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('ID_TOKEN_KEY')}`
    //   await connections.fetchCurrentStore()
    //   await this.fetchCurrentPlan(sessionStorage.getItem('USER_ID'))
    //   router.replace('/')
    //   this.loading = false
    // }
  }
}
