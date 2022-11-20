import React, { useEffect, useState } from 'react'
import { Container, Modal, Row, Tab, Tabs } from 'react-bootstrap'
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
                <Img
                  src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                />
              ) : (
                <Img
                  src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
                />
              )}
            </Row>
            <StyledRow>
              Title: <StyledSpan>{movie.title}</StyledSpan>
            </StyledRow>
            <StyledRow>
              Budget:{' '}
              <StyledSpan>
                {movie.budget ? `$${movie.budget}` : 'N/A'}
              </StyledSpan>
            </StyledRow>

            <StyledRow>
              Revenue:{' '}
              <StyledSpan>
                {movie.revenue ? `$${movie.revenue}` : 'N/A'}
              </StyledSpan>
            </StyledRow>

            <StyledRow>
              Release Date: <StyledSpan>{movie.release_date}</StyledSpan>
            </StyledRow>
            <StyledRow>
              Runtime: <StyledSpan>{movie.runtime} minutes</StyledSpan>
            </StyledRow>
            <StyledRow>
              Rating:
              <StyledSpan>
                {movie.vote_average ? movie.vote_average : 'N/A'}
              </StyledSpan>
            </StyledRow>
            <StyledRow>
              Votes:
              <StyledSpan>
                {movie.vote_count ? movie.vote_count : 'N/A'}
              </StyledSpan>
            </StyledRow>
            <OverviewRow>{movie.overview}</OverviewRow>
            <CastRow>Top Billed Cast</CastRow>
            <AnotherCastRow>
              {cast.slice(0, 8).map((person: singleProps) => (
                <CastCard key={person.id}>
                  {person.profile_path ? (
                    <CastImg
                      variant='top'
                      src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                    />
                  ) : (
                    <CastImg
                      variant='top'
                      src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg `}
                    />
                  )}
                  <StyledCardTitle>{person.name}</StyledCardTitle>
                </CastCard>
              ))}
            </AnotherCastRow>
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
  opacity: 0.2;
  margin-bottom: 1rem;
`
const StyledRow = styled(Row)`
  margin: 0.1rem;
  font-weight: bold;
`
const StyledSpan = styled.span`
  font-style: italic;
  font-weight: normal;
  width: 50%;
`
const CastRow = styled(Row)`
  margin-left: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`
const OverviewRow = styled(Row)`
  margin-left: 0.1rem;
  margin-top: 1rem;
  font-style: italic;
  width: 100%;
`
const StyledCardTitle = styled(Card.Title)`
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  font-size: small;
`
const CastImg = styled(Card.Img)`
  width: 10rem;
  @media (max-width: 769px) {
    width: 5rem;
  }
`

const CastCard = styled(Card)`
  width: 10rem;
  background-color: #131516;
  font-size: small;
  @media (max-width: 769px) {
    padding: 0 0 0 5px;
    width: 5rem;
    background-color: #131516;
  }
`
const AnotherCastRow = styled(Row)`
  @media (max-width: 769px) {
    padding: 0 0 0 1rem;
`
