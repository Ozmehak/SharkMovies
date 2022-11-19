import { Api } from '../components/Api'
import styled from 'styled-components'

export const TopRated = () => {
  return (
    <Container>
      <Title>Top Rated Movies</Title>
      <ContentContainer>
        <Api category='top_rated' />
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: #131516;
`

const Title = styled.h1`
  color: #0dcaf0;
  text-align: center;
  margin: 3rem 0;
`

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
