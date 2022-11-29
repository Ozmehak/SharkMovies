import React, {createContext, useState} from "react";

export const SearchContext = createContext()

export const SearchProvider = (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchContent, setSearchContent] = useState([])
    const [clicked, setClicked] = useState(null)
    console.log(searchContent)
    
    return (
        <SearchContext.Provider 
        value={{searchQuery, setSearchQuery, searchContent, setSearchContent, clicked, setClicked}}>
            {props.children}
        </SearchContext.Provider>
    )
}