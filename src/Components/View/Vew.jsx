import React, { useEffect, useState,Swal } from 'react';
import axiosInstance from '../../Config/axiosInstance';
import Vdetail from './Vdetail';
import { useParams } from 'react-router-dom';
import Loder from '../Loder';


export default function Vew() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true on mount and on id change

    if (!id) return;

    axiosInstance.get(`/movie/${id}`)
      .then((res) => {
        console.log("Received movie data:", res.data);
        setDetail(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to fetch movie details. Please try again later.',
        });
        setLoading(false); // Ensure loading is set to false on error
      });
  }, [id]);

  return (
    <div>
      {loading ? <Loder /> : detail && <Vdetail detail={detail} />}
    </div>
  );
}
