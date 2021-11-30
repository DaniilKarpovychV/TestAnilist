import React, { FC, UIEvent, useContext, useEffect, useState } from 'react'
import { Filter } from './filter/Filter'
import { TableList } from './TableList'
import styled from 'styled-components'
import { Contact } from '../types/types'
import { FilterContext } from '../lib/FilterContext'
import { useAnilist } from '../hooks/useAnilist'

const ContainerWrapper = styled.div`
display:flex;
height:100%;
width:90%;
box-shadow: 0px 0px 5px 3px rgb(210 210 210);

`

export const Container: FC = () => {
  const { setFilters, page } = useContext(FilterContext)
  const { data, isSuccess, isLoading } = useAnilist()
  const currentPage = data?.data?.Page?.pageInfo?.currentPage
  const anilist = data?.data.Page.media || []
  const [allContacts, setAllContacts] = useState<Contact[]>([])
  useEffect(() => {
    if (isSuccess) {
      setAllContacts(state => {
        if (page > 1) {
          return [...state, ...anilist]
        }
        return anilist
      })
    }
  }, [isSuccess, anilist])

  const onScrollHandler = (event: UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.currentTarget.scrollTop + event.currentTarget.clientHeight >= event.currentTarget.scrollHeight - 100 && currentPage) {
      setFilters((state) => {
        console.log(page)
        return { ...state, page: currentPage + 1 }
      })
    }
  }

  return (
    <ContainerWrapper>
      <Filter contacts={ allContacts } />
      <TableList contacts={allContacts} page={data?.nextPage} setContactsState={setAllContacts} onScrollHandler={onScrollHandler} isLoading={isLoading}/>
    </ContainerWrapper>
  )
}
