import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MovieSearch, { MovieContext } from './Context/MovieSearch';


export default function Navbar() {
 const {changeSearchWord} = useContext(MovieContext)
 const safaa = useNavigate()

 function change(e){
  changeSearchWord(e.target.value)
  safaa('/search')
 }

  return (
    
    <div className='row'>
      <div className=' container'>
      <nav className="navbar navbar-expand-lg navbar-light Navstyle">
        <Link className="navbar-brand text-capitalize Navlistyle fs-2 mx-4" to="/home">Noxe</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-5">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-capitalize Navlistyle" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link Navlistyle" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link Navlistyle" to="/tv-show">TV Shows</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link Navlistyle" to="/people">People</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link Navlistyle" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link Navlistyle" to="/network">Network</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Search */}
        <div className="col-2">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>MovieSearch(e.target.value)} />
          </form>
        </div>
        {/* FontAwesome Icons */}
        <div className="col-1 mx-3">
          <ul className='list-unstyled row'>
            <li className='col-1 Navlistyle'><i className="fab fa-facebook"></i></li>
            <li className='col-1 Navlistyle'><i className="fab fa-spotify"></i></li>
            <li className='col-1 Navlistyle'><i className="fab fa-instagram"></i></li>
            <li className='col-1 Navlistyle'><i className="fab fa-youtube"></i></li>
          </ul>
        </div>
        {/* Logout Button */}
        <div className="col-2 mx-2">
    <Link to="/register">
        <button className='buttonstyle mx-1'>Register</button>
    </Link>
    <Link to="/login">
        <button className='buttonstyle'>Login</button>
    </Link>
</div>
      </nav>
    </div>
    </div>
  );
}
