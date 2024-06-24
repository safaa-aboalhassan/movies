import React, { useContext, useEffect, useState } from 'react';
import axiosInstance from '../../Config/axiosInstance';
import { Link, useNavigate } from 'react-router-dom'
import { MovieContext,MovieSearch } from '../Context/MovieSearch';


export default function Search() {
  const { searchWord } = useContext(MovieContext);
  
  const [searchResults, setSearchResults] = useState([]);
  const searchMovie = (movieName) => {
    axiosInstance.get(`/search/movie?query=${movieName}`)
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setSearchResults([]);
      });
  };

  useEffect(() => {
    searchMovie(searchWord);
}, [searchWord]);
  return (
    <>
      <div className="row">
        {searchResults.length > 0 ? (
          searchResults.map(movie => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <div className="card bg-dark">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.original_title}
                  className="card-img-top"
                  style={{ borderRadius: '10%' }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {movie.title}
                  </h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-md-12 text-center">
            {searchResults.length === 0 && <p>No movies found.</p>}
          </div>
        )}
      </div>
    </>
  );
}
