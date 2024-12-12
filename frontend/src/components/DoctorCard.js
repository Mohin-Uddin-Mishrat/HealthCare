import React from 'react'
import doctor from '../Assets/doctor-removebg-preview.png'
export const DoctorCard = () => {
  return (
    <div  className='flex flex-col justify-center items-center p-3 bg-slate-300 rounded-lg space-y-2'>
        <img className='w-20 bg-white rounded-full h-20 ' src={doctor}></img>
        <h1 className='font-semibold'>Md Mishrat</h1>
        <p className='text-center text-[12px]'>Lorem ipsum dolor sit amet, consectetur amet, consectetur </p>
    </div>
  )
}