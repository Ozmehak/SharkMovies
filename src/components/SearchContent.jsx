import React, { useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'

export const SearchContent = () => {
    const {searchQuery, searchContent} = useContext(SearchContext)
    
    
    const navigate = useNavigate()

    const navigateId = (e) => {
      navigate(`${e.currentTarget.id}`)
    }

    if (searchContent === undefined) {
        return <div></div>
    }

    return (
        <>
            {searchQuery
              ? searchContent.map((item) => (
                  <SearchContentContainer 
                  key={item.id}
                  id={item.id}
                  onClick={(e) => navigateId(e)}
                  >
                    <MovieTitle>{item.title || item.name}</MovieTitle>
                    <img
                      src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                      alt='posters'
                      style={{ width: '100px', height: '150px' }}
                    />
                  </SearchContentContainer>
                ))
              : ''}
        </>
    )}

const SearchContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 2rem auto;
`
const MovieTitle = styled.p`
    font-size: 1rem;
    color: aliceblue;

    @media(min-width: 500px) {
        font-size: 1.5rem;
    }
`

