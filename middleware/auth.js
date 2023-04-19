import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()

  if (auth.isAuthenticated && to.fullPath === '/login') {
    return navigateTo(from.fullPath)
  }
})
