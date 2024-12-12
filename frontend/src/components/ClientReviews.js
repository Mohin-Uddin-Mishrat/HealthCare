import React from 'react'
import { Reviews } from './Reviews'

export const ClientReviews = () => {
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
