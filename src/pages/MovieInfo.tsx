import { useParams } from 'react-router'

interface Props {
  movieId: string | number
}

export const MovieInfo = () => {
  let { movieId } = useParams()

  return <div>{movieId}</div>
}
