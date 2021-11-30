import React, { createContext, Dispatch, ReactElement, SetStateAction, useState } from 'react'

interface Filter {
    searchInput: string,
    includeTags: any,
    excludeTags: any,
    minMessagesSent: number|string,
    maxMessagesSent: number|string,
    maxMessagesRecv: number|string,
    minMessagesRecv: number | string,
    page:any,

}
interface State {
    searchInput: string,
    includeTags: any,
    excludeTags: any,
    minMessagesSent: number|string,
    maxMessagesSent: number|string,
    maxMessagesRecv: number|string,
    minMessagesRecv: number | string,
    page:any,
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
  page: 1,
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
    page: 1
  })
  return (
    <FilterContext.Provider value={{ ...filters, setFilters }}>
      {props.children}
    </FilterContext.Provider>
  )
}
