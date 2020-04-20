import axios from "axios"
import ajaxLoader from "../actions/ajaxLoader"

export default {
  setupInterceptors: store => {
    axios.interceptors.request.use(
      config => {
        store.dispatch(ajaxLoader(true))
        // eslint-disable-next-line no-param-reassign
        config.headers["Content-Type"] = "application/json"
        // eslint-disable-next-line no-param-reassign
        config.headers.Accept = "application/json"

        return config
      },
      error => Promise.reject(error)
    )
    // Add a response interceptor
    axios.interceptors.response.use(
      response => {
        store.dispatch(ajaxLoader(false))
        return Promise.resolve(response.data)
      },
      error => {
        store.dispatch(ajaxLoader(false))
        return Promise.reject(error)
      }
    )
  }
}
