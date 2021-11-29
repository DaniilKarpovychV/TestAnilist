import React, { Dispatch, FC, SetStateAction } from 'react'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'

import { Tag } from './Tag'

const CustomTable = styled(Table)`
  border-collapse: collapse;
  border-radius: 0.5rem;
  height:160px; 
  overflow:hidden;
`
const TableWrapper = styled.div`
  height: 9rem;
  overflow-x: hidden;
  border-radius: 0.5rem;
    `

const TagsFieldWrapper = styled.div`
margin-top:1rem;
`
interface Props {
  setState: Dispatch<SetStateAction<string[]>>,
  tagsArray: {
    name: string,
    filters:{}
  }[] | [],
  title:string,
  includeTags: string[],
  isSuccess:boolean,
}

export const TagsField: FC<Props> = ({ title, setState, tagsArray, includeTags, isSuccess }) => {
  const onClickHandler = (name: string) => {
    setState((state) => {
      if (state.includes(name)) {
        return [...state.filter(tag => tag !== name)]
      }
      console.log([...state, name])
      const set = new Set([...state, name])

      const newState = [...set]

      return newState
    })
  }
  return (
  <TagsFieldWrapper>
      <h6>{ title }</h6>
    <TableWrapper>
      <CustomTable striped hover size='sm'>
        <tbody>
          {isSuccess && tagsArray.map((tag, index) => {
            return (
              <Tag key={index} tag={tag} onClickHandler={onClickHandler} includeTags={includeTags} />
            )
          })}
        </tbody>
      </CustomTable>
      </TableWrapper>
      </TagsFieldWrapper>
  )
}
