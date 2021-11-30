import axios from 'axios'

// const query = `
// query ($id:init){
// GenreCollection,
// }
// `

export const anilistApi = {
  async getAnilist (
    searchInput:any,
    includeTags:any,
    excludeTags:any,
    minMessagesSent:any,
    maxMessagesSent:any,
    maxMessagesRecv:any,
    minMessagesRecv:any,
    page:any
  ) {
    const query = `
  query ($id: Int, $page: Int, $perPage: Int, $search: String, $genre_in:[String], $tag_in:[String]) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search, genre_in:$genre_in, tag_in:$tag_in, type: ANIME) {
      id
      genres
      coverImage{
        medium
      }
      tags{
        id
        name
      }
      title {
        romaji,
        english
      }
    }
  }
}
 `
    console.log(includeTags)
    const variables = {
      search: searchInput ? `${searchInput}` : undefined,
      genre_in: includeTags.length > 0 ? includeTags : undefined,
      tag_in: excludeTags.length > 0 ? excludeTags : undefined,
      page: `${page}`,
      perPage: 15
    }

    const body = JSON.stringify({
      query: query,
      variables: variables
    })
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
    const { data } = await axios.post('https://graphql.anilist.co', body, options)
    return data
  },
  async getTagsGenre () {
    const query = `
    query ($status: Int) {
      GenreCollection,
        MediaTagCollection(status: $status){
        name
      }
    }
    `
    const variables = {}
    const body = JSON.stringify({
      query: query,
      variables: variables
    })
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
    const { data } = await axios.post('https://graphql.anilist.co', body, options)
    return data
  }

}
