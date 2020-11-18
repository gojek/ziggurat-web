import axios from 'axios'

const API_TIMEOUT_IN_MS = 30000

class HttpClient {
  post = (url, data) => {
    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
    return axios.post(url, data, {
      timeout: API_TIMEOUT_IN_MS,
    })
  }

  get = url => {
    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
    return axios.get(url, {
      timeout: API_TIMEOUT_IN_MS,
    })
  }

  put = (url, data) => {
    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
    return axios.put(url, data, {
      timeout: API_TIMEOUT_IN_MS,
    })
  }

  delete = url => {
    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        return Promise.reject(error)
      }
    )
    return axios.delete(url, {
      timeout: API_TIMEOUT_IN_MS,
    })
  }

}

export default new HttpClient()
