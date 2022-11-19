import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Cards } from './Cards'

export const apiContext = createContext<apiProps | null>(null)

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
}

export const Api = (props: apiProps) => {
  const [content, setContent] = useState<apiProps[]>([])
  const [movieId, setMovieId] = useState(undefined)

  const handleShow = (e: any) => {
    setMovieId(e.target.id)
  }
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
    <apiContext.Provider value={{ content }}>
      <Cards />
    </apiContext.Provider>
  )
}
