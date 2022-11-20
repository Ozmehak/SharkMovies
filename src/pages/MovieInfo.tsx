import { useParams } from 'react-router'
import { GetSingle } from '../components/GetSingle'

export const MovieInfo = () => {
  let { movieId } = useParams()

  return <GetSingle id={movieId} />
}
