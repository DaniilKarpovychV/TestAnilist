import React, { FC } from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../img'

interface Props {
  onClickHandler: (name:string) => void,
  tag: any,
  include:string
}

const Img = styled.img`
height:1rem;
padding-left:1rem;
`
const ContentWrapper = styled.div`
display:flex;
justify-content: space-between;
`

export const Tag: FC<Props> = ({ onClickHandler, tag, include }) => {
  if (!tag.name) {
    const name = tag
    return (
    <tr onClick={() => onClickHandler(name)}>
      <th>
        <ContentWrapper>
          <span>{tag}</span>
            <div>
          {include.includes(tag) && <Img src={IMAGES.trash} />}
          {include.includes(tag) && <Img src={IMAGES.green} />}
          </div>
        </ContentWrapper>
      </th>
    </tr>
    )
  }
  return (
    <tr onClick={() => onClickHandler(tag.name)}>
      <th>
        <ContentWrapper>
          <span>{tag.name}</span>
          <div>
          {include.includes(tag.name) && <Img src={IMAGES.trash} />}
          {include.includes(tag.name) && <Img src={IMAGES.green} />}
          </div>
        </ContentWrapper>
      </th>
    </tr>
  )
}
