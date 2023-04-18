import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuthStore()

  if(isAuthenticated === true) {
    return navigateTo(from.path)
  }
})
