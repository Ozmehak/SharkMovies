import React, {useEffect, useContext, useState} from "react"
import {Button, Form} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import {SearchContext} from '../context/SearchContext';

export const Search = () => {
    const {searchQuery, setSearchQuery, setSearchContent, clicked, setClicked} = useContext(SearchContext)
    const [searchType, setSearchType] = useState('movie')

    const navigate = useNavigate()

    useEffect(() => {

        if (clicked > 0) {
            fetch(
                `${process.env.REACT_APP_API_URL_SEARCH}${searchType}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchQuery}`
            )
                .then((response) => response.json())
                .then((response) => setSearchContent(response.results))
        }
    }, [clicked, searchQuery, setSearchContent, searchType])

    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')
        value.trim()
        setSearchQuery(value)
    }

    const handleClick = () => {
        setClicked(1)
        navigate('/searchcontent')

    }

    const isSelected = (value) => {
    if(searchType === value) {
        return true
    }}

    const handleChange = (e) => {
        setSearchType(e.target.value)

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
                <div key={`inline-radio`} className="mb-3">
                    <Form.Check
                        inline
                        label="Movies"
                        name="group1"
                        type='radio'
                        id={`inline-radio-1`}
                        value='movie'
                        defaultChecked
                        checked={isSelected('movie')}
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="TV"
                        name="group1"
                        type='radio'
                        id={`inline-radio-2`}
                        value='tv'
                        checked={isSelected('tv')}
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="Actors"
                        name="group1"
                        type='radio'
                        id={`inline-radio-3`}
                        value='person'
                        checked={isSelected('person')}
                        onChange={handleChange}
                    />
                </div>
                <div key={`inline-radio1`} className="mb-3">
                    <Form.Check
                        inline
                        label="No Adult"
                        name="group2"
                        type='radio'
                        id={`inline-radio-5`}
                        defaultChecked
                    />
                    <Form.Check
                        inline
                        label="Adult"
                        name="group2"
                        type='radio'
                        id={`inline-radio-4`}
                    />
                </div>

                <Button
                    variant='outline-info'
                    style={{marginTop: '1rem', marginBottom: '1rem'}}
                    onClick={handleClick}
                >
                    Search
                </Button>

            </Form>
        </>
    )
}