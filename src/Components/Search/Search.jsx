import React, { useContext, useEffect, useState } from 'react';

import { MovieContext } from '../Context/MovieSearch';
import axiosInstance from '../../Config/axiosInstance';
import Loder from '../Loder';
import Card from '../Card/Card';


export default function Search() {

  const { searchWord } = useContext(MovieContext); 
  const [searchResults, setSearchResults] = useState([]); 

  // Function to search for movies based on movieName
  const searchMovie = (movieName) => {
    axiosInstance.get(`/search/movie?query=${movieName}`)
      .then(response => {
        setSearchResults(response.data.results); 
        console.log("search is " + response)
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setSearchResults([]); 
      
      });
      
      console.log("search"+searchWord)
  };

 
  useEffect(() => {
    if (searchWord.trim() !== '') { 
      searchMovie(searchWord); 
    } else {
      setSearchResults([]); 
    }
  }, [searchWord]); 

  return (
    <>
        <div className="row  Appstyle ">
                    {searchResults.length>0?searchResults.map((movie)=><Card key={movie.id} data={movie}/>):<h2>search not found </h2>}                                 
                </div>
    </>
  );
}
