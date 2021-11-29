import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { App } from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { FilterProvider } from './lib/FilterContext'

const queryClient = new QueryClient()

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <App />
        </FilterProvider>
      </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
)
