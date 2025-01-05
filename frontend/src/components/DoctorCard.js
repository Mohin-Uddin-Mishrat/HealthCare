import React from 'react'
import { Link } from 'react-router-dom'
export const DoctorCard = ({doctor}) => {
  return (
    <Link to={`/doctor/${doctor.id}`}  className='flex flex-col justify-center items-center p-3 bg-slate-300 rounded-lg space-y-2'>
        <img className='w-20 bg-white rounded-full h-20 ' src={doctor?.image}></img>
        <h1 className='font-semibold'>{doctor?.user}</h1>
        <p className='text-center text-[12px]'>Lorem ipsum dolor sit amet, consectetur amet, consectetur </p>
    </Link>
  )
}
