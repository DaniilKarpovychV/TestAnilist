import React, { createContext, Dispatch, ReactElement, SetStateAction, useState } from 'react'

interface Filter {
    searchInput: string,
    includeTags: string[]|[],
    excludeTags: string[]|[],
    minMessagesSent: number|string,
    maxMessagesSent: number|string,
    maxMessagesRecv: number|string,
    minMessagesRecv: number | string,
    page:string|undefined,

}
interface State {
    searchInput: string,
    includeTags: string[]|[],
    excludeTags: string[]|[],
    minMessagesSent: number|string,
    maxMessagesSent: number|string,
    maxMessagesRecv: number|string,
    minMessagesRecv: number | string,
    page:string|undefined,
    setFilters:Dispatch<SetStateAction<Filter>>
};

type Props = {
  children:ReactElement
}

export const FilterContext = createContext<State>({
  searchInput: '',
  includeTags: [],
  excludeTags: [],
  minMessagesSent: '',
  maxMessagesSent: '',
  maxMessagesRecv: '',
  minMessagesRecv: '',
  page: '',
  setFilters: () => {}
})

export const FilterProvider = (props:Props) => {
  const [filters, setFilters] = useState<Filter>({
    searchInput: '',
    includeTags: [],
    excludeTags: [],
    minMessagesSent: '',
    maxMessagesSent: '',
    maxMessagesRecv: '',
    minMessagesRecv: '',
    page: ''
  })
  return (
    <FilterContext.Provider value={{ ...filters, setFilters }}>
      {props.children}
    </FilterContext.Provider>
  )
}
