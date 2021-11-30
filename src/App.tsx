import React, { FC } from 'react'
import styled from 'styled-components'
import { anilistApi } from './api/anilistApi'
import './App.css'
import { Container } from './components/Container'

const AppWrapper = styled.div`
display:flex;
justify-content:center;
width:100vw;
height: 100vh;
padding: 2rem;

`

export const App: FC = () => {
  const data = anilistApi.getTagsGenre()
  console.log('APP', data)
  return (
    <AppWrapper>
      <Container />
    </AppWrapper>
  )
}
