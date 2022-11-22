import styled from 'styled-components'
import { Api } from './Api'
import Button from 'react-bootstrap/Button'
import { addToWatchlist, auth, removeFromWatchlist } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function MovieSection() {
  const [user] = useAuthState(auth)
  return (
    <>
      <MovieDiv>
        {user ? (
          <Button
            onClick={() => removeFromWatchlist(user.uid, '13231233123123123')}
          ></Button>
        ) : (
          console.log('nothing')
        )}
        <MovieTitle>Releases in December</MovieTitle>
        <CardDiv>
          <Api movieId='8228183' />
        </CardDiv>
      </MovieDiv>
      <MovieDiv>
        <MovieTitle>Unforgettable Movies</MovieTitle>
        <CardDiv>
          <Api movieId='8227557' />
        </CardDiv>
      </MovieDiv>
      <MovieDiv>
        <MovieTitle>Underrated Movies</MovieTitle>
        <CardDiv>
          <Api movieId='8227655' />
        </CardDiv>
      </MovieDiv>

      <MovieDiv>
        <MovieTitle>Disturbing Movies</MovieTitle>
        <CardDiv>
          <Api movieId='8227656' />
        </CardDiv>
      </MovieDiv>
    </>
  )
}

const MovieDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-evenly;
  margin: 80px 10% 100px;
  text-align: center;

  @media (max-width: 1440px) {
    margin: 20px 10% 20px;
  }
  @media (max-width: 769px) {
    margin: 0;
  }
`

const MovieTitle = styled.h3`
  background: black;
  border-radius: 5px;
  color: #0dcaf0;
  font-size: 50px;

  @media (max-width: 769px) {
    font-size: 35px;
  }
`

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  padding-top: 25px;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }

  @media (max-width: 769px) {
    flex-wrap: wrap;
  }
`
