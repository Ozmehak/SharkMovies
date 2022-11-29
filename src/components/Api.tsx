import React, { createContext, useEffect, useState } from 'react'
import { Cards } from './Cards'

export const ApiContext = createContext<apiProps | null>(null)

type apiProps = {
  json?: any
  title?: string
  item?: object
  poster_path?: object
  src?: string
  category?: string
  id?: any
  apiContext?: any
  contextFromApi?: any
  content?: Array<any>
  movieId?: string
  watchlisted?: boolean
  setWatchlisted?: any
  Argument?: boolean
}

export const Api: React.FC = (props: apiProps) => {
  const [content, setContent] = useState<apiProps[]>([])

  useEffect(() => {
    if (props.category) {
      fetch(
        `${process.env.REACT_APP_API_URL}${props.category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((response) => setContent(response.results))
    } else if (props.movieId) {
      fetch(
        `${process.env.REACT_APP_API_URL_LISTS}${props.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((response) => setContent(response.items))
    }
  }, [props.category, props.movieId])

  return (
    <ApiContext.Provider value={{ content }}>
      <Cards />
    </ApiContext.Provider>
  )
}
