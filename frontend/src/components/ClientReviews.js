import React, { useEffect, useState } from 'react'
import { Reviews } from './Reviews'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setReviw } from '../redux/doctorSlice';

export const ClientReviews = () => {
  const dispatch = useDispatch()
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resPonse = await axios.get(`https://healthcare-tgu6.onrender.com/review/`);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
        
      }
    };
    fetchdata();
  }, []);
  if (loading) return <div>Loading...</div>
  return (
    <div className='md:w-[70%] mx-auto px-4 md:px-0 my-10'>
        <h1 className='text-xl font-bold text-blue-400 text-center'>Client reviews about us</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-3'>
            <Reviews></Reviews>
            <Reviews></Reviews>
            <Reviews></Reviews>
            <Reviews></Reviews>
            <Reviews></Reviews>
        </div>
    </div>
  )
}
