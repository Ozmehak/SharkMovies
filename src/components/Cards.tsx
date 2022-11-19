import React, { useContext, useState } from 'react'
import { apiContext } from './Api'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

interface CardsProps {
  json?: any
  title?: string
  item?: object
  poster_path?: object
  src?: string
  category?: string
  id?: any
}

export const Cards = () => {
  const contextFromApi = useContext(apiContext)

  return (
    <>
      {' '}
      {contextFromApi?.content?.map((item) => (
        <Card
          key={item.id}
          style={{ width: '10rem', backgroundColor: '#131516' }}
        >
          <Card.Img
            variant='top'
            src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
          />

          <Card.Body>
            <Button
              style={{ backgroundColor: '#131516' }}
              className='p-0 border-0'
              id={item.id}
            >
              {' '}
              {item.title}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
