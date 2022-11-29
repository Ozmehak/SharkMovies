import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Popular } from './pages/Popular'
import { TopRated } from './pages/TopRated'
import { MovieInfo } from './pages/MovieInfo'
import { WatchList } from './pages/WatchList'
import { SearchProvider } from './context/SearchContext'
import { SearchContent } from './components/SearchContent'

function App() {
  return (
    <div style={{ backgroundColor: '#131516' }}>
      <SearchProvider>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/popular' element={<Popular />} />
          <Route exact path='/toprated' element={<TopRated />} />
          <Route exact path='/searchContent' element={<SearchContent />} />
          <Route exact path='/:movieId' element={<MovieInfo />} />
          <Route exact path='popular/:movieId' element={<MovieInfo />} />
          <Route exact path='toprated/:movieId' element={<MovieInfo />} />
          <Route exact path='/watchlist' element={<WatchList />} />
          <Route exact path='searchcontent/:movieId' element={<MovieInfo />} />
        </Routes>
      </SearchProvider>
      <Footer />
    </div>
  )
}

export default App
