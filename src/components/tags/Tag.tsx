import React, { FC } from 'react'
import styled from 'styled-components'
import { IMAGES } from '../../img'

interface Props {
  onClickHandler: (name:string) => void,
  tag: {
    name: string,
    filters:{}
  },
  includeTags:string[],
}

const ContentWrapper = styled.div`
display:flex;
justify-content: space-between;
`
const Img = styled.img`
height:1rem;
padding-left:1rem;
`

export const Tag: FC<Props> = ({ onClickHandler, tag, includeTags }) => {
  return (
    <tr onClick={() => onClickHandler(tag.name)}>
      <th>
        <ContentWrapper>
          <span>{tag.name}</span>
          <div>
          {includeTags.includes(tag.name) && <Img src={IMAGES.trash} />}
          {includeTags.includes(tag.name) && <Img src={IMAGES.green} />}
          </div>
        </ContentWrapper>
      </th>
    </tr>
  )
}
