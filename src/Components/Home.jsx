import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import axiosInstance from '../Config/axiosInstance'
import Loder from './Loder';




export default function Home() {
    let [movies, setMovies] = useState([])

    useEffect(() => {
        axiosInstance.get(`/movie/popular`)
            .then(res => setMovies(res.data.results))
    }, [])


    return (
        <>
            <div className='Appstyle'>
            <div className='container '>
                <div className="row  ">
                    {movies.length>0?movies.map((movie)=><Card key={movie.id} data={movie}/>):<Loder />}                                 
                </div>
            </div>
            </div>
           
        </>
    )
}
