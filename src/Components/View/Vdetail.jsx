import React from 'react';
import Loder from '../Loder';


export default function Vdetail(props) {
    console.log("Props in Vdetail:", props);

    const { detail } = props;
    if (!detail) {
        return <Loder />;  }

    const {tagline,original_title,genres,release_date,popularity, vote_average,vote_count, poster_path, overview } = detail;
    const baseImgUrl = 'https://image.tmdb.org/t/p/original';

    return (
        <div className='Appstyle '>
        <div className="container">
            <div className="row  ">
                <div className='col-5 m-3'>
                    <img src={baseImgUrl + poster_path} className="card-img-top img" alt="" />
                </div>
                <div className='col-4    m-3 textdetail my-9'>
                    <h3>{original_title}</h3>
                    <h5 className='my-2'>  {tagline}</h5>
                    <button className='btn  btn-info p-1 my-2 mx-2 btndetaile'>{genres[0].name}</button>
                    <button className='btn  btn-info p-1 mx-2 btndetaile'>{genres[1].name}</button>
                    <button className='btn  btn-info p-1 btndetaile'>{genres[2].name}</button>
                   
                    <h5 className='my-2'>vote:{vote_average}</h5>
                    <h5 className='my-2'>vote count:{vote_count}</h5>
                    <h5 className='my-2'>popularity:{popularity}</h5>
                    <h5 className='my-2'>release_date:{release_date}</h5>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
        </div>
    );
}

