import React, { FC, UIEvent, useContext, useEffect, useState } from 'react'
import { Filter } from './filter/Filter'
import { TableList } from './TableList'
import { useContact } from '../hooks/useContact'
import styled from 'styled-components'
import { Contact } from '../types/types'
import { FilterContext } from '../lib/FilterContext'

const ContainerWrapper = styled.div`
display:flex;
height:100%;
width:90%;
box-shadow: 0px 0px 5px 3px rgb(210 210 210);

`

export const Container: FC = () => {
  const { setFilters, page } = useContext(FilterContext)
  const { data, isSuccess } = useContact()
  const contacts = data?.contacts || []
  const [allContacts, setAllContacts] = useState<Contact[]>([])

  useEffect(() => {
    if (isSuccess) {
      setAllContacts(state => {
        if (!page) {
          return contacts
        }
        return [...state, ...contacts]
      })
    }
  }, [isSuccess, contacts])

  const onScrollHandler = (event: UIEvent<HTMLDivElement, UIEvent>) => {
    if (event.currentTarget.scrollTop + event.currentTarget.clientHeight >= event.currentTarget.scrollHeight - 200 && data?.nextPage) {
      setFilters((state) => {
        if (state.page === null) {
          return state
        }
        return { ...state, page: data.nextPage }
      })
    }
  }

  return (
    <ContainerWrapper>
      <Filter contacts={ allContacts } />
      <TableList contacts={allContacts} page={data?.nextPage} setContactsState={setAllContacts} onScrollHandler={onScrollHandler}/>
    </ContainerWrapper>
  )
}
