import React, { FC } from 'react'
import styled from 'styled-components'
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
  return (
    <AppWrapper>
      <Container />
    </AppWrapper>
  )
}
