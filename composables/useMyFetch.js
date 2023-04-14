export const useMyFetch = (request, options) => {
  const config = useRuntimeConfig()
  return useFetch(request, { baseURL: config.public.baseURL, ...options })
}
