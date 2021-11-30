import React, { Dispatch, FC, SetStateAction, UIEvent, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { IMAGES } from '../img'
import { Contact } from '../types/types'
import { SearchField } from './SearchField'
import { TableRow } from './TableRow'

const CustomContainer = styled(Container)`
display:relative;
width:75%;
height:100%;
overflow-x: hidden;
`
const Header = styled.div`
display:flex;
justify-content: space-between;
margin:1rem 0rem;
`
const ContainerRow = styled(Row)`
height:60px;
`
const CustomCol = styled(Col)`
align-items: baseline;
display:flex;
`
const Img = styled.img`
height:1.5rem;
margin-right:1rem;
`
const ImgWrapper = styled.div`
display:flex;
height:100%;
`
const CustomColButton = styled(Col)`
display:flex;
justify-content: end;
align-items: center;
`

const ExportButton = styled.button`
background-color:#23aea3;
border-radius:0.5rem;
margin: 0rem 1rem 1rem 1rem;
padding: 0.4rem;
color:white;
font-size:12px;
border:0px;
`
interface Props {
  contacts: Contact[],
  page:string|undefined,
  setContactsState: Dispatch<SetStateAction<Contact[]>>,
  onScrollHandler: (event: UIEvent<HTMLDivElement, UIEvent>) => void,
  isLoading:boolean,
}

export const TableList: FC<Props> = ({ contacts, onScrollHandler, page, isLoading }) => {
  const [selectAll, setSelectAll] = useState<number[]>([])
  const onClickSelectAll = () => {
    setSelectAll(contacts.map((item: { id: number }) => item.id))
  }
  const onClickDeselect = () => {
    setSelectAll([])
  }
  return (
    <>
      <CustomContainer onScroll={onScrollHandler} >
        <Header>
          <h2>{`All contacts(${contacts ? contacts.length : 0})`}</h2>
        </Header>
        <SearchField />
        <ContainerRow>
          <CustomCol>
            {selectAll.length !== contacts.length && <ImgWrapper onClick={onClickSelectAll} >
              <Img src={IMAGES.grey} alt='status' />
              <span>Select all</span>
            </ImgWrapper>
            }
            {selectAll.length === contacts.length && contacts.length !== 0 && <ImgWrapper onClick={onClickDeselect} >
              <Img src={IMAGES.green} alt='status' />
              <span>Select all</span>
            </ImgWrapper>}
            <CustomColButton>
              {false && <ExportButton onClick={() => false}>-</ExportButton>}
            </CustomColButton>
          </CustomCol>
        </ContainerRow>
        {Array.isArray(contacts) &&
          contacts.map((anime:any) => <TableRow key={anime.id} title={anime.title} coverImage={anime.coverImage} tags={anime.tags}
            selectContact={selectAll} setSelectContact={setSelectAll} id={anime.id} />)}
        {isLoading && <p>...Loading</p>}
      </CustomContainer>
    </>
  )
}
