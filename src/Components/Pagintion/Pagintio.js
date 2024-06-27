import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Config/axiosInstance';
import { Link } from 'react-router-dom';
import Loder from '../Loder';


function Page() {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const limit = 5; // Assuming limit is constant and doesn't need state management
    const baseImgUrl = 'https://image.tmdb.org/t/p/original';
    const [loading, setLoading] = useState(true);
    const totalPages = 6;
    useEffect(() => {
        fetchData();
    }, [page]); // Fetch data when page changes

    const fetchData = () => {
        setLoading(true); // Set loading state to true before fetching data
        axiosInstance.get(`/movie/popular?page=${page}&limit=${limit}`)
            .then(response => {
                setMovies(response.data.results);
                setLoading(false); // Set loading state to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                setLoading(false); // Ensure loading state is set to false on error
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
            <h1>All movies</h1>
            {loading ? (
                <Loder/> // Show loader while fetching data
            ) : (
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
            )}

            <nav aria-label="Page navigation example " className='m-4 '>
                <ul className="pagination justify-content-center m-auto  ">
                    <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={handlePreviousClick}>&laquo; Previous</button>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index} className="page-item">
                            <button className={`page-link ${page === index + 1 ? 'active' : ''}`} onClick={() => setPage(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li className="page-item">
                        <button className="page-link" onClick={handleNextClick}>Next &raquo;</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Page;
