import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const { url, method = 'get', data = null } = config

  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send()
}
