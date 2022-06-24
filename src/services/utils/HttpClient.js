import delay from '../../utils/delay'

class HttpClient {
  constructor (baseURL) {
    this.baseURL = baseURL
  }

  async get (path) {
    const response = await fetch(`${this.baseURL}${path}`)

    await delay(500)

    return await response.json()
  }
}

export default HttpClient
