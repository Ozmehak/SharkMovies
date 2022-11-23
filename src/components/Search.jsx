import React, { useState, useEffect, useContext } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext';

export const Search = () => {
  const {searchQuery, setSearchQuery, setSearchContent, clicked, setClicked} = useContext(SearchContext)

  
    const navigate = useNavigate()

    const navigateId = (e) => {
    }
   
    useEffect(() => {
    
        if (clicked > 0) {
          fetch(
            `${process.env.REACT_APP_API_URL_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchQuery}`
          )
            .then((response) => response.json())
            .then((response) => setSearchContent(response.results))
        }
      }, [clicked, searchQuery, setSearchContent])
       
      const handleSearch = (e) => {
        let value = e.target.value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')
        value.trim()
        setSearchQuery(value)
      }
    
      const handleClick = () => {
        setClicked(1)
        navigate('/searchcontent')
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
            
          </Form>
        </>
    )
}