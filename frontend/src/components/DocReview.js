import React from 'react'
import doctor from '../Assets/doctor-removebg-preview.png'
import { FaStar } from 'react-icons/fa'
export const DocReview = () => {
  return (
    <div className='bg-white shadow-md flex flex-col justify-center items-center rounded-lg p-4'>
        <img className='w-16 h-16 bg-slate-300 rounded-full' src={doctor}></img>
        <h2 className='font-semibold text-blue-400'>Md Mishrat</h2>
        <p className='text-[10px]'>lorem ipsum hello</p>
        <div className='text-yellow-600 flex'>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar className='text-black'></FaStar>
        </div>
    </div>
  )
}
