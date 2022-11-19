import { useParams } from 'react-router'
import { GetSingle } from '../components/GetSingle'

interface Props {
  movieId: string | number
}

export const MovieInfo = () => {
  let { movieId } = useParams()

  return <GetSingle id={movieId} />
}
