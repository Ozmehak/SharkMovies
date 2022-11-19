import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Popular } from './pages/Popular'
import { TopRated } from './pages/TopRated'
import { MovieInfo } from './pages/MovieInfo'

function App() {
  return (
    <div style={{ backgroundColor: '#131516' }}>
      <Header />

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/popular' element={<Popular />} />
          <Route exact path='/toprated' element={<TopRated />} />
          <Route exact path='/:movieId' element={<MovieInfo />} />
          <Route exact path='popular/:movieId' element={<MovieInfo />} />
          <Route exact path='toprated/:movieId' element={<MovieInfo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
