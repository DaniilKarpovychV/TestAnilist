import React, { useContext, useState, FC } from 'react'
import styled from 'styled-components'
import { useTags } from '../../hooks/useTags'
import { FilterContext } from '../../lib/FilterContext'
import { FilterButton } from './FilterButton'
import { FilterInput } from './FilterInput'
import { TagsField } from '../tags/TagsField'
import { IMAGES } from '../../img'
import { Contact } from '../../types/types'

const FilterWrapper = styled.div`
height:100%;
width:25%;
box-shadow: 3px 3px 3px rgb(240 240 240);
padding: 0.5rem;
padding-top:1rem;
`
const FilterHeaderWrapper = styled.div`
display:flex;
justify-content: space-between;
`
const Img = styled.img`
width:1.3rem;
margin-bottom: 0.5rem;
margin-right: 1rem;
`
const FilterTitle = styled.h6`
font-size:1.3rem;
`
const MenuTitleWrapper = styled.div`
display:flex;
`
const Span = styled.span`
font-size:0.9rem;
color:lightgrey;
padding-top:0.2rem;
`

export const Filter: FC<{ contacts: Contact[] }> = ({ contacts }) => {
  const { data, isSuccess } = useTags()
  const tagsArray = data ? data.tags : []
  const { setFilters } = useContext(FilterContext)
  const [include, setInclude] = useState<string[]>([])
  const [Exclude, setExclude] = useState<string[]>([])
  const [sendLength, setSendLength] = useState<{min:number|string, max:number|string}>({ min: '', max: '' })
  const [receivedLength, setReceivedLength] = useState<{ min: number | string, max: number | string }>({ min: '', max: '' })

  const onSubmitHandler = () => {
    setFilters((state) => {
      return {
        ...state,
        page: '',
        includeTags: include,
        excludeTags: Exclude,
        minMessagesSent: sendLength.min,
        maxMessagesSent: sendLength.max,
        minMessagesRecv: receivedLength.min,
        maxMessagesRecv: receivedLength.max
      }
    })
  }

  return (
    <FilterWrapper>
      <FilterHeaderWrapper>
        <MenuTitleWrapper>
          <Img src={IMAGES.menu}/>
          <FilterTitle>Audience</FilterTitle>
        </MenuTitleWrapper>
        <Span>{contacts && contacts.length} Contacts</Span>
      </FilterHeaderWrapper>
      <TagsField title='Include Tags:' setState={setInclude} includeTags={include} tagsArray={tagsArray} isSuccess={isSuccess}/>
      <TagsField title='Exclude Tags:' setState={setExclude} includeTags={Exclude} tagsArray={tagsArray} isSuccess={isSuccess}/>
      <FilterInput title='Message Sent:' setState={setSendLength} value={ sendLength }/>
      <FilterInput title='Message Received:'setState={setReceivedLength} value={ receivedLength }/>
      <FilterButton onSubmitHandler={onSubmitHandler}/>
    </FilterWrapper>

  )
}
