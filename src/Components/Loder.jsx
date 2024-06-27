import React from 'react'
import { BallTriangle, ColorRing, InfinitySpin } from 'react-loader-spinner'

export default function Loder() {
  return (
   <>
   <div className='d-flex vh-100 justify-content-center align-items-center'>(<BallTriangle
   
   height={100}
   width={100}
   radius={5}
   color="#4fa94d"
   ariaLabel="ball-triangle-loading"
   wrapperStyle={{}}
   wrapperClass=""
   visible={true}
        />)</div>
   </>
  )
}
