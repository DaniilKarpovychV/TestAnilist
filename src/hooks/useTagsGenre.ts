import { useQuery } from 'react-query'
import { anilistApi } from '../api/anilistApi'

export const useTagsGenre = () => {
  const { data, isSuccess } = useQuery('tags_genre', () => anilistApi.getTagsGenre())
  return { data, isSuccess }
}
