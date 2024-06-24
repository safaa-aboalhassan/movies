import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Config/axiosInstance';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

function Page() {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const limit = 5; // Assuming limit is constant and doesn't need state management
    const baseImgUrl = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        fetchData();
    }, [page]); // Fetch data when page changes

    const fetchData = () => {
        axiosInstance.get(`/movie/popular?page=${page}&limit=${limit}`)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    };

    const handlePreviousClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextClick = () => {
        setPage(page + 1);
    };

    return (
        <div>
            <nav aria-label="Page navigation example " className='m-4 '>
                <ul className="pagination justify-content-center m-auto ">
                    <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handlePreviousClick}>&laquo; Previous</button>
                    </li>
                    <li className="page-item">
                        <button className={`page-link ${page === 1 ? 'active' : ''}`} onClick={() => setPage(1)}>1</button>
                    </li>
                    <li className="page-item">
                        <button className={`page-link ${page === 2 ? 'active' : ''}`} onClick={() => setPage(2)}>2</button>
                    </li>
                    <li className="page-item">
                        <button className={`page-link ${page === 3 ? 'active' : ''}`} onClick={() => setPage(3)}>3</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={handleNextClick}>Next &raquo;</button>
                    </li>
                </ul>
            </nav>
           
                {movies.map(movie => (
                    <div className='row Appstyle'>
                    {movies.map(movie => (
                        <div key={movie.id} className="col-2 flex-nowrap justify-content-lg-around">
                            <div className="col-12 m-0 p-0 mt-3">
                                <Link to={`/view/${movie.id}`}>
                                    <img className="card-img-top m-0 p-0 img" src={baseImgUrl + movie.poster_path} alt="Card image cap" />
                                </Link>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title title">{movie.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                
                ))}
            </div>
        
    );
}


export default Page;
