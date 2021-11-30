import React, { ChangeEvent, useContext } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import styled from 'styled-components'
import { FilterContext } from '../lib/FilterContext'
import { debounce } from 'ts-debounce'
import { IMAGES } from '../img'

const Input = styled(FormControl)`
background-color:rgb(233,233,233);
border: 0;
border-radius:50px 50px 50px 50px;
`
const Img = styled.img`
position:absolute;
z-index:1;
width:1rem;
bottom:0.6rem;
left:0.8rem;
`
const CustomInputGroup = styled(InputGroup)`
margin-bottom:1rem;
border-radius:50px;
`
const Wrapper = styled.div`
position:relative;
`

export const SearchField = () => {
  const { setFilters, searchInput } = useContext(FilterContext)

  const onChangeHandler = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setFilters((state) => {
      return { ...state, searchInput: event.target.value, page: 1 }
    })
  }, 500)

  return (
    <Wrapper>
      {!searchInput && <Img src={IMAGES.search} />}
      <CustomInputGroup>
        <Input
          onChange={onChangeHandler}
          placeholder="      Search contacts"
          aria-label=" Search"
          aria-describedby="basic-addon1"
        />
      </CustomInputGroup>
    </Wrapper>
  )
}
