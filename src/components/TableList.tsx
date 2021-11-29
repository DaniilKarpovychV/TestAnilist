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

const Button = styled.button`
height:30px;
width:30px;
background-color:#23aea3;
border-radius:1rem;
color:white;
margin-top:0.5rem;
font-size:22px;
padding: 0rem 1.5rem 2.2rem 0.7rem;
border:0px;
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
  onScrollHandler:(event: UIEvent<HTMLDivElement, UIEvent>)=>void
}

export const TableList: FC<Props> = ({ contacts, onScrollHandler, page }) => {
  const [selectAll, setSelectAll] = useState<number[]>([])
  const onClickSelectAll = () => {
    setSelectAll(contacts.map((item: { id: number }) => item.id))
  }
  return (
    <>
      <CustomContainer onScroll={onScrollHandler} >
        <Header>
          <h2>{`All contacts(${contacts ? contacts.length : 0})`}</h2>
          <Button>+</Button>
        </Header>
        <SearchField />
        <ContainerRow>
          <CustomCol>
            <ImgWrapper onClick={onClickSelectAll} >
              <Img src={IMAGES.grey} alt='status' />
              <span>Select all</span>
            </ImgWrapper>
            <CustomColButton>
              {true && <ExportButton onClick={() => true}>Export All</ExportButton>}
              {false && <ExportButton onClick={() => false}>-</ExportButton>}
            </CustomColButton>
          </CustomCol>
        </ContainerRow>
        {Array.isArray(contacts) &&
          contacts.map((contact: Contact) => <TableRow key={contact.id} contact={contact}
            selectContact={selectAll} setSelectContact={setSelectAll} />)}
        {page !== null && <p>...Loading</p>}
      </CustomContainer>
    </>
  )
}
