export const login = {
  async login(payload) {
    this.loginForm.loading = true
    const connections = useConnectionsStore()
    const { data: { value } } = await useMyPost('user/login', {
      onResponse({ request, response, options }) {
        window.sessionStorage.setItem('ID_TOKEN_KEY', response.headers.get('x-syncio-app-token'));
      },
      body: { ...payload }
    })
    const { success, user } = value
    if(success) this.user = await user

    if (window.sessionStorage.getItem('ID_TOKEN_KEY')) {
      this.isAuthenticated = true
      sessionStorage.setItem('USER_ID', this.user?.id)
      await connections.fetchCurrentStore()
      await this.fetchCurrentPlan(sessionStorage.getItem('USER_ID'))
      navigateTo('/')
      this.loginForm.loading = false
    }
  }
}
