import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import { FormControl } from 'react-bootstrap'
import styled from 'styled-components'

const CustomInput = styled(FormControl)`
margin:0.5rem;
border-radius:0.7rem;
border:0px;
background-color:rgb(233,233,233);
`
const CustomGroup = styled.div`
display:flex;
`
const FilterInputWrapper = styled.div`
margin-top:0.8rem;
`
interface Props {
  title: string,
  value: {min:number|string, max:number|string},
  setState:Dispatch<SetStateAction<{min:number|string, max:number|string}>>
}

export const FilterInput: FC<Props> = ({ title, setState, value }) => {
  const onClickHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setState((state) => {
      if (+event.target.value < 0) {
        return state
      }
      return { ...state, [event.target.name]: +event.target.value }
    })
  }

  return (
    <FilterInputWrapper>
      <h6>{ title }</h6>
    <CustomGroup >
      <CustomInput
        type='number'
        onChange={onClickHandler}
        name='min'
        value = {value.min}
        placeholder='Min'
        aria-label="Min"
        aria-describedby="basic-addon1"
      />
      <CustomInput
        onChange={onClickHandler}
        type='number'
        value = {value.max}
        name='max'
        placeholder="Max"
        aria-label="Max"
        aria-describedby="basic-addon1"
      />
    </CustomGroup>
  </FilterInputWrapper>
  )
}
