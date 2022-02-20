/* eslint-disable no-unused-vars,no-param-reassign */
import axios from 'axios'
import NProgress from 'nprogress'

export default {
  init(router, store) {
    axios.interceptors.request.use(async (config) => {
      NProgress.configure({ showSpinner: false })
      NProgress.start()

      if (process.env.NODE_ENV === 'production')
        config.baseURL = process.env.VUE_APP_API_BASE_URL
      return config
    })

    axios.interceptors.response.use((response) => {
      NProgress.done()
      // console.log(response);
      return response
    })

    axios.interceptors.response.use(null, async (error) => {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        if (error.response.status === 401) {
          // handle 401
        }
        if (
          error.response.status === 500 ||
          error.response.status === 502 ||
          error.response.status === 504 ||
          error.response.status === 403
        ) {
          router.push({ name: 'ServerError' })
        }

        if (error.response.status === 404) {
          router.push({ name: 'NotFound' })
        }
        // console.log(error.response);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        router.push({ name: 'NoInternet' })
      } else {
        // * Something happened in setting up the request and triggered an Error
        // console.log('Error', error.message);
        // router.push({ name: 'NoInternet' });
      }
      // console.log(error);
      return Promise.reject(error)
    })

    router.beforeResolve((to, from, next) => {
      if (to.path) {
        NProgress.configure({ showSpinner: false })
        NProgress.start()
      }
      next()
    })

    router.afterEach((to, from) => {
      NProgress.done()
    })
  },
}
