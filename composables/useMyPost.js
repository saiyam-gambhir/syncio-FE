export const useMyPost = (request, options) => {
  const config = useRuntimeConfig()
  const { appId, baseURL } = config.public

  return useFetch(request, {
    baseURL,
    headers: { 'x-syncio-app-id': appId },
    method: 'post',
    onRequest({ request, options }) {
      options.headers['Authorization'] = `Bearer ${sessionStorage.getItem('ID_TOKEN_KEY')}`
    },
    ...options
  })
}
