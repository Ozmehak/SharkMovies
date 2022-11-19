import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Modal, Row, Tab, Tabs } from 'react-bootstrap'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

type singleProps = {
  json?: any
  title?: string
  item?: object
  poster_path?: object
  src?: string
  category?: string
  id?: any
  budget?: number
  overview?: string
  original_language?: string
  release_date?: string
  backdrop_path?: string
  revenue?: number
  runtime?: number
  vote_average?: number
  vote_count?: number
  person?: string
  credits?: any
  profile_path?: string
  name?: string
  male?: any
}

export const GetSingle = (props: singleProps) => {
  const [movie, setMovie] = useState<singleProps>({})
  const [cast, setCast] = useState<singleProps[]>([])

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}${props.id}?api_key=${process.env.REACT_APP_API_KEY}&&append_to_response=credits`
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response)
        setCast(response.credits.cast)
      })
  }, [props.id])

  return (
    <Tabs fill defaultActiveKey='info' style={{ backgroundColor: '#131516' }}>
      <Tab eventKey='info' title='Info'>
        <Modal.Body
          className='show-grid'
          style={{ backgroundColor: '#131516', color: '#fff' }}
        >
          <Container>
            <Row>
              {movie.backdrop_path ? (
                <Col>
                  <Img
                    src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                  />
                </Col>
              ) : (
                <Col>
                  <Img
                    src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
                  />
                </Col>
              )}
              <Col>
                <StyledRow>Title: {movie.title}</StyledRow>
                {movie.budget ? (
                  <StyledRow>Budget: ${movie.budget}</StyledRow>
                ) : (
                  <StyledRow>Budget: N/A</StyledRow>
                )}
                {movie.revenue ? (
                  <StyledRow>Revenue: ${movie.revenue}</StyledRow>
                ) : (
                  <StyledRow>Revenue: N/A</StyledRow>
                )}
                <StyledRow>Release Date: {movie.release_date}</StyledRow>
                <StyledRow>Runtime: {movie.runtime} minutes</StyledRow>
                <StyledRow>Rating: {movie.vote_average}</StyledRow>
                <StyledRow>Votes: {movie.vote_count}</StyledRow>
              </Col>
            </Row>
            <OverviewRow>{movie.overview}</OverviewRow>
            <CastRow>Top Billed Cast</CastRow>
            <Row>
              {cast.slice(0, 5).map((person: singleProps) => (
                <Card
                  key={person.id}
                  style={{ width: '9rem', backgroundColor: '#131516' }}
                >
                  {person.profile_path ? (
                    <Card.Img
                      variant='top'
                      src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                    />
                  ) : (
                    <Card.Img
                      style={{ width: 118, height: 177 }}
                      variant='top'
                      src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg `}
                    />
                  )}
                  <StyledCardTitle>{person.name}</StyledCardTitle>
                </Card>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Tab>
      <Tab eventKey='images' title='Images'>
        <Modal.Body
          className='show-grid'
          style={{ backgroundColor: '#131516', color: '#fff' }}
        >
          <Container>
            <Row>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Row>
          </Container>
        </Modal.Body>
      </Tab>
      <Tab eventKey='stuff' title='Stuff'>
        <Modal.Body
          className='show-grid'
          style={{ backgroundColor: '#131516', color: '#fff' }}
        >
          <Container>
            <Row>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Row>
          </Container>
        </Modal.Body>
      </Tab>

      <Tab eventKey='things' title='Things'>
        <Modal.Body
          className='show-grid'
          style={{ backgroundColor: '#131516', color: '#fff' }}
        >
          <Container>
            <Row>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Row>
          </Container>
        </Modal.Body>
      </Tab>
    </Tabs>
  )
}

const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`
const StyledRow = styled(Row)`
  margin: 0.1rem;
`
const CastRow = styled(Row)`
  margin-left: 0.1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`
const OverviewRow = styled(Row)`
  margin-left: 0.1rem;
  margin-top: 1rem;
`
const StyledCardTitle = styled(Card.Title)`
  margin-top: 0.5rem;
`
