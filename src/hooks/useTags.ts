import { useQuery } from 'react-query'
import { api } from '../api/api'
import { Tags } from '../types/types'

export const useTags = () => {
  const query = useQuery<Tags, Error>('tags', () => api.getTags())
  return query
}
