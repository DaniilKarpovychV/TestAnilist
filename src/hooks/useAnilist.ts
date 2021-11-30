import { useContext } from 'react'
import { useQuery } from 'react-query'
import { anilistApi } from '../api/anilistApi'
import { FilterContext } from '../lib/FilterContext'

export const useAnilist = () => {
  const {
    searchInput,
    includeTags,
    excludeTags,
    minMessagesSent,
    maxMessagesSent,
    maxMessagesRecv,
    minMessagesRecv,
    page
  } = useContext(FilterContext)
  console.log('useAnilist', includeTags)
  const { data, isSuccess, isLoading } = useQuery(`${['anilist',
    searchInput,
    includeTags,
    excludeTags,
    minMessagesSent,
    maxMessagesSent,
    maxMessagesRecv,
    minMessagesRecv,
    page
  ]}`, () => anilistApi.getAnilist(
    searchInput,
    includeTags,
    excludeTags,
    minMessagesSent,
    maxMessagesSent,
    maxMessagesRecv,
    minMessagesRecv,
    page
  ))
  return { data, isSuccess, isLoading }
}
