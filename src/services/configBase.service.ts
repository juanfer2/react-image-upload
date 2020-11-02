import axios from 'axios'

interface CallFetchInterface {
  baseUrl: string
  url: string
  method: any
  data?: any
  headers?: any
}

const callFetch = async ({
  baseUrl,
  url,
  method,
  data = {},
  headers = {},
}: CallFetchInterface): Promise<any> =>
  axios({
    method,
    url: baseUrl + url,
    data,
    headers,
  })

export default callFetch
