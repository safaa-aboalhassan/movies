import logo from './logo.svg';
import './App.css';
import './Scss/style.css'
import Pagintio from './Components/Pagintion/Pagintio';



import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Vew from './Components/View/Vew';
import Vdetail from './Components/View/Vdetail';
import Search from './Components/Search/Search';
import Login from './Components/Rigister/Login';
import Rigistering from './Components/Rigister/Rigistering';
import MovieSearch from './Components/Context/MovieSearch';


function App() {
  return (
    <div className="App">
      <Navbar/>
     
     <MovieSearch  />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Rigistering />} />
        <Route path='movies' element={<Pagintio />} />
        <Route path='/view/:id' element={<Vew/>} />
        <Route path='*' element={<h1>Not Found</h1>} />


      </Routes>
      
      <Footer />
    </div>
  );
} 

export default App;
