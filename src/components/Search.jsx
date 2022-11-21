import React, { useState, useEffect } from "react"
import { Button, Form } from "react-bootstrap"

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchContent, setSearchContent] = useState([])
    const [clicked, setClicked] = useState(null)

    useEffect(() => {
    
        if (clicked > 0) {
          fetch(
            `${process.env.REACT_APP_API_URL_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchQuery}`
          )
            .then((response) => response.json())
            .then((response) => setSearchContent(response.results))
        }
      }, [clicked, searchQuery])
    
      const handleSearch = (e) => {
        let value = e.target.value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')
        value.trim()
        setSearchQuery(value)
      }
    
      const handleClick = () => {
        setClicked(1)
      }

    return (
        <>
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
        </>
    )
}