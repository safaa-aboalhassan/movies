import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    console.log(props)
    const baseImgUrl = 'https://image.tmdb.org/t/p/original'
    let { title, poster_path, original_language, id, overview } = props.data
  return (
   <>
   <div className="col-2 m-0 p-0 mt-3  ">
          <Link to={'/view/'+id}><img className="card-img-top m-0 p-0 img" src={baseImgUrl + poster_path} alt="Card image cap" /></Link>
            <div className="card-body">
                <h5 className="card-title tittle">{title}</h5>

            </div>
        </div>
   </>
  )
}
