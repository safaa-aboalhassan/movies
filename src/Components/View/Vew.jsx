import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Config/axiosInstance';
import Vdetail from './Vdetail';
import { useParams } from 'react-router-dom';
import Loder from '../Loder';


export default function Vew() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (!id) return;

    axiosInstance.get(`/movie/${id}`)
      .then((res) => {
        console.log("Received movie data:", res.data);
        setDetail(res.data);
        setLoading(false); 
      },2000)
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      
        setLoading(false); 
      });
  }, [id]);

  return (
    <div>
      {loading ? <Loder /> : detail && <Vdetail detail={detail} />}
    </div>
  );
}
