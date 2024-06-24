import axios from 'axios';
import React from 'react'

const axiosInstance=axios.create({
    
    baseURL:"https://api.themoviedb.org/3" ,
    params:{
        'api_key':'4a237c15242093ecc76825f33cc1b52c'
    }
   
})



export default axiosInstance;

