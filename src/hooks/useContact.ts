import { useContext } from 'react'
import { useQuery } from 'react-query'
import { api } from '../api/api'
import { FilterContext } from '../lib/FilterContext'
import { ContactsResponse } from '../types/types'

export const useContact = () => {
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
  const returnTotalCount = 'true'
  const query = useQuery<ContactsResponse, Error>(`${['contact',
    searchInput,
    includeTags,
    excludeTags,
    minMessagesSent,
    maxMessagesSent,
    maxMessagesRecv,
    minMessagesRecv,
    page
  ]}`, () => api.getContact(
    searchInput,
    includeTags,
    excludeTags,
    minMessagesSent,
    maxMessagesSent,
    maxMessagesRecv,
    minMessagesRecv,
    returnTotalCount,
    page
  ))
  return query
}
