import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Cloudinary } from '@cloudinary/url-gen'
import { fit } from '@cloudinary/url-gen/actions/resize'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'

function NavBar() {
  const [user] = useAuthState(auth)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchContent, setSearchContent] = useState([])
  const [clickt, handleClickt] = useState(null)

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dvvauf785',
    },
  })

  useEffect(() => {
    if (clickt > 0) {
      fetch(
        `${process.env.REACT_APP_API_URL_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchQuery}`
      )
        .then((response) => response.json())
        .then((response) => setSearchContent(response.results))
    }
  }, [clickt])

  const logoImage1 = cld.image('sharkLogoSM_c2zffk')
  const sharkLogo = logoImage1.resize(fit().width(80).height(80)).toURL()

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleClick = () => {
    handleClickt(1)
  }

  return (
    <Navbar
      className='navbar navbar-dark bg-dark border-bottom border-light'
      expand='lg'
      style={{ padding: 0 }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls='navbarScroll' className='p-0 px-2' />
        <img alt='logo' src={sharkLogo} />
        <Navbar.Brand href='/' style={{ color: '#CCC9C3' }}>
          SharkMovies
        </Navbar.Brand>

        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/popular'>Popular</Nav.Link>
            <Nav.Link href='/toprated'>Top Rated</Nav.Link>
            {user && <Nav.Link href='/watchlist'>WatchList</Nav.Link>}
          </Nav>
          <Form className='d-flex flex-column'>
            <Form.Control
              style={{
                backgroundColor: 'rgba(19, 21, 22, 0.1)',
                color: '#fff',
                borderColor: '#0dcaf0',
              }}
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              onChange={handleSearch}
              value={searchQuery}
            />

            <Button
              variant='outline-info'
              style={{ marginTop: '1rem', marginBottom: '1rem' }}
              onClick={handleClick}
            >
              Search
            </Button>
            {searchQuery
              ? searchContent.map((item) => (
                  <div key={item.id}>
                    <p>{item.title}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                      alt='posters'
                      style={{ width: '50px', height: '70px' }}
                    />
                  </div>
                ))
              : ''}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
