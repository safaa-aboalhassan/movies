import React, { createContext, useState } from 'react';

// Import Link and useNavigate from react-router-dom if you need them

export const MovieContext = createContext({});

export default function MovieSearchProvider(props) {
    // State to hold the search word
    const [searchWord, setSearchWord] = useState("");

    // Function to update the search word
    const changeSearchWord  = (word)=>{
        setSearchWord(word);
        console.log("word"+searchWord)
    };

    return (
        // Provide the context value to all nested components
        <MovieContext.Provider value={{ searchWord, changeSearchWord }}>
            {props.children}
        </MovieContext.Provider>
    );
}
