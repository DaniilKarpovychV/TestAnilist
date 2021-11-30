import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { IMAGES } from '../img'

const ContainerRow = styled(Row)`
border-bottom: 1px solid rgb(220 220 220);;
height:10rem;
`
const Img = styled.img`
height:1.5rem;
`
const ProfileImg = styled.img`
height:9rem;
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
width:200px;
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
margin:0.1rem;
color: white;
font-size:0.8rem;
padding:0.15rem;
border-radius:0.5rem;
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
const TagsWrapper = styled.div`
width:700px;
height:100%;
`

export const TableRow: FC<any> = ({ id, title, coverImage, tags, selectContact, setSelectContact }) => {
  return (
    <ContainerRow>
      <CustomCol>
        <ImgWrapper>
          <Img src={selectContact.includes(id) ? IMAGES.green : IMAGES.grey} alt='status' />
        </ImgWrapper>
        <ProfileImgWrapper>
          <ProfileImg src={coverImage.medium} alt='profile photo' />
        </ProfileImgWrapper>
        <TextWrapper>
          <h6>{title.romaji}</h6>
        </TextWrapper>
      </CustomCol>
      <CustomColButton>
        <TagsWrapper>{tags.map((tag:any, index:any) => <Span key={index}>{tag.name}</Span>)}</TagsWrapper>
        {!selectContact.includes(id) && <Button onClick={() => setSelectContact((state:any) => [...state, id])}>+</Button>}
        {selectContact.includes(id) && <Button onClick={() => setSelectContact((state:any) => state.filter((item:any) => item !== id))}>-</Button>}
      </CustomColButton>
    </ContainerRow>
  )
}
