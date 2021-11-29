import React, { Dispatch, FC, SetStateAction } from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { IMAGES } from '../img/index'

interface Props {
  contact: {
    id: number,
    name: string,
    phoneNumber: string,
    tags: {name:string}[]
  },
  selectContact: number[],
  setSelectContact:Dispatch<SetStateAction<number[]>>
}
const ContainerRow = styled(Row)`
border-bottom: 1px solid rgb(220 220 220);;
height:60px;
`
const Img = styled.img`
height:1.5rem;
`
const ProfileImg = styled.img`
height:3rem;
border-radius:100px;
margin-left:1rem;
`
const ProfileImgWrapper = styled.div`
display:flex;
height:100%;
align-items: center;
`

const ImgWrapper = styled.div`
display:flex;
height:100%;
align-items: center;
`
const CustomCol = styled(Col)`
display:flex;
`
const TextWrapper = styled.div`
margin-left:1rem;
`
const CustomColButton = styled(Col)`
display:flex;
justify-content: end;
align-items: center;
`
const Span = styled.span`
background-color:#23aea3;
padding:0 0.8rem;
border-radius:2rem;
color: white;
font-size:0.8rem;
margin-left:0.6rem;
`
const Button = styled.button`
width:18px;
background-color:#23aea3;
border-radius:2rem;
margin: 1rem;
padding: 0px 17px 1px 8px;
color:white;
font-size:16px;
border:0px;
`

export const TableRow: FC<Props> = ({ contact, selectContact, setSelectContact }) => {
  return (
    <ContainerRow>
      <CustomCol>
        <ImgWrapper>
          <Img src={selectContact.includes(contact.id) ? IMAGES.green : IMAGES.grey} alt='status' />
        </ImgWrapper>
        <ProfileImgWrapper>
          <ProfileImg src={IMAGES.deadpool} alt='profile photo' />
        </ProfileImgWrapper>
        <TextWrapper>
          <h6>{contact.name}</h6>
          <span>{contact.phoneNumber}</span>
        </TextWrapper>
      </CustomCol>
      <CustomColButton>
        {contact.tags.map((tag, index) => <Span key={index}>{tag.name}</Span>)}
        {!selectContact.includes(contact.id) && <Button onClick={() => setSelectContact(state => [...state, contact.id])}>+</Button>}
        {selectContact.includes(contact.id) && contact && <Button onClick={() => setSelectContact(state => state.filter(item => item !== contact.id))}>-</Button>}
      </CustomColButton>
    </ContainerRow>
  )
}
