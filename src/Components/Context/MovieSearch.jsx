import React, { createContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export const MovieContext = createContext({});

export default function MovieSearch(props) {
    const [searchWord, setSearchWord] = useState("");

    // Function to update searchWord
    const changeSearchWord = (word) => {
        setSearchWord(word);
    };

    return (
        <MovieContext.Provider value={{ searchWord, changeSearchWord }}>
            {props.children}
        </MovieContext.Provider>
    );
}
