export const useFetchApi = (url, options) => {
  const config = useRuntimeConfig();

  const params = {
    baseURL: config.public.baseUrl,
    ...options,
  };

  return useFetch(url, params);
};
