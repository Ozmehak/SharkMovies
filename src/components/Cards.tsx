import React, { useContext, useState } from 'react'
import { apiContext } from './Api'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface CardsProps {
  json?: any
  title?: string
  item?: object
  poster_path?: object
  src?: string
  category?: string
  id?: any
}

export const Cards = (props: CardsProps) => {
  const navigate = useNavigate()
  const contextFromApi = useContext(apiContext)
  const navigateId = (e: any) => {
    navigate(`${e.currentTarget.id}`)
  }
  return (
    <>
      {contextFromApi?.content?.map((item) => (
        <StyledCard
          key={item.id}
          id={item.id}
          onClick={(e: MouseEvent) => navigateId(e)}
        >
          <StyledCardImg
            variant='top'
            src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
          />

          <StyledP> {item.title}</StyledP>
        </StyledCard>
      ))}
    </>
  )
}

const StyledCardImg = styled(Card.Img)`
  @media (max-width: 769px) {
  }
`
const StyledCard = styled(Card)`
  width: 10rem;
  border-style: solid;
  border-color: red;
  background-color: #131516;
  cursor: pointer;

  @media (max-width: 769px) {
    width: 7rem;
    margin-bottom: 1rem;
  }
`
const StyledP = styled.p`
  color: #fff;
  @media (max-width: 769px) {
    font-size: small;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    height: 2rem;
    margin: 1rem 1rem 1rem 1rem;
  }
`
