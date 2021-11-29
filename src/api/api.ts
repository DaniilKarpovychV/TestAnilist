/* eslint-disable quote-props */
import axios from 'axios'
import { ContactsResponse, Tags } from '../types/types'

interface Api {
  getContact: (searchInput: string,
    includeTags:string[],
    excludeTags:string[],
    minMessagesSent:number|string,
    maxMessagesSent:number|string,
    maxMessagesRecv:number|string,
    minMessagesRecv: number | string,
    returnTotalCount: 'true',
    page:string|undefined) => Promise<ContactsResponse>,
  getTags: () => Promise<Tags>,
  getToken: () => void,
  request: <DataType>(path: string, params?: {}) => Promise<DataType>,
}

export const api:Api = {
  async request<DataType> (path: string, params: any): Promise<DataType> {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      params
    }

    try {
      const { data } = await axios.get<DataType>(`https://api-im.chatdaddy.tech/${path}`, options)
      return data
    } catch (err: any) {
      console.log(err.message === 'Request failed with status code 500')
      console.log(err)
      if (err.message === 'Request failed with status code 500') {
        this.getToken()
        return this.request(path, params)
      }
      throw err
    }
  },
  async getContact (
    searchInput,
    includeTags,
    excludeTags,
    minMessagesSent,
    maxMessagesSent,
    maxMessagesRecv,
    minMessagesRecv,
    returnTotalCount,
    page
  ): Promise<ContactsResponse> {
    const tags = includeTags.reduce((prev, cur) => `${prev}tags=${cur}&`, '')
    const tagsExclude = excludeTags.reduce((prev, cur) => `${prev}notTags=${cur}&`, '')
    const maxRecv = (maxMessagesRecv === '') ? '' : `&maxMessagesRecv=${maxMessagesRecv}`
    const minRecv = (minMessagesRecv === '') ? '' : `&minMessagesRecv=${minMessagesRecv}`
    const minSend = (minMessagesSent === '') ? '' : `&minMessagesSent=${minMessagesSent}`
    const maxSend = (maxMessagesSent === '') ? '' : `&maxMessagesSent=${maxMessagesSent}`
    return this.request(`contacts?${tags}${tagsExclude}${maxRecv}${minRecv}${minSend}${maxSend}`, {
      returnTotalCount,
      q: searchInput,
      count: '25',
      page
    })
  },
  async getTags () {
    return this.request('tags')
  },

  async getToken () {
    const query = await axios.post('https://api-teams.chatdaddy.tech/token', {
      'refreshToken': '059c420e-7424-431f-b23b-af0ecabfe7b8',
      'teamId': 'a001994b-918b-4939-8518-3377732e4e88'
    }
    )
    localStorage.setItem('token', `${query.data.access_token}`)
  }
}
