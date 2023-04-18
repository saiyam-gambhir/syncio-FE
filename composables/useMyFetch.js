export const useMyFetch = async (request, options) => {
  const config = useRuntimeConfig()
  const { appId, baseURL } = config.public

  return await useFetch(request, {
    baseURL,
    headers: { 'x-syncio-app-id': appId },
    onRequest({ request, options }) {
      options.headers['Authorization'] = `Bearer ${sessionStorage.getItem('ID_TOKEN_KEY')}`
    },
    ...options
  })
}
