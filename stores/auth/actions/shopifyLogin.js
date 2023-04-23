/**
 * @param {string} platform - The name of the platform the user is logging in with.
 * @param {string} storeName - The name of the store the user is logging in to.
 */
import * as routes from '@/routes'

export const shopifyLogin = {
  async shopifyLogin(platform, storeName) {
    try {
      // Set the login form loading state to true
      this.loginForm.loading = true

      // Send a POST request to the API to log in the user with the provided platform and store name
      const { data: { value } } = await useMyPost('user/platforms/login', {
        // Set a callback function to store the token in session storage
        onResponse({ request, response, options }) {
          sessionStorage.setItem('ID_TOKEN_KEY', response.headers.get('x-syncio-app-token'))
        },
        body: {
          // Set the platform and store name in the request body
          platform,
          store_name: storeName
        }
      })

      // Destructure the success and user properties from the response value object
      const { success, user } = value

      // If the login was successful, set the user object in the component state
      if (success) {
        this.user = user
      }

      // Get the connections store object using a custom hook
      const { fetchCurrentStore } = useConnectionsStore()

      // If the token exists in session storage, set the authentication state to true
      if (sessionStorage.getItem('ID_TOKEN_KEY')) {
        this.isAuthenticated = true

        // Set the user ID in session storage
        sessionStorage.setItem('USER_ID', this.user?.id)

        // Fetch the current store from the connections store
        await fetchCurrentStore()

        // Fetch the current plan for the user using their ID
        await this.fetchCurrentPlan(user.id)

        // Navigate to the dashboard page
        navigateTo(routes.DASHBOARD)

        // Set the login form loading state to false
        this.loginForm.loading = false
      }
    } catch (error) {
      // Log any errors that occur and set the login form loading state to false
      console.error(error)
      this.loginForm.loading = false
    }
  }
}
