import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
margin-top:30rem;
width:100%;
display:flex;
border-radius:0.6rem;
background-color:#23aea3;
`
const CustomButton = styled(Button)`
width:100%;
height:3rem;
border-radius:0.6rem;
background-color:#23aea3;
border:0;
`
interface Props {
onSubmitHandler:()=>void
}

export const FilterButton:FC<Props> = ({ onSubmitHandler }) => {
  return (
    <ButtonWrapper>
      <CustomButton onClick={onSubmitHandler} >
        Save Filters
      </CustomButton>
    </ButtonWrapper>
  )
}
