import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { GetSingle } from './GetSingle';

export const SearchContent = () => {
    const {searchQuery, searchContent} = useContext(SearchContext)
    
    
    const navigate = useNavigate()

    const navigateId = (e) => {
      navigate(`${e.currentTarget.id}`)
    //   <GetSingle />
    }

    return (
        <>
            {searchQuery
              ? searchContent.map((item) => (
                  <div 
                  key={item.id}
                  id={item.id}
                  onClick={(e) => navigateId(e)}
                  >
                    <p>{item.title}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                      alt='posters'
                      style={{ width: '50px', height: '70px' }}
                    />
                  </div>
                ))
              : ''}
        </>
    )
}