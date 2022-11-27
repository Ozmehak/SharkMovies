import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, showWatchList } from '../firebase'

export const WatchList = () => {
  const [user] = useAuthState(auth)

  showWatchList('yyhrN2I2sdX8of5ocrE0XAg88lm2')

  return (
    <Container>
      {user && (
        <Title>
          {user.displayName}'s Saved Movies {user.uid}
        </Title>
      )}

      <ContentContainer></ContentContainer>
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
