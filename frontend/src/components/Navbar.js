import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [isToggle ,setIstoggle] = useState(false)
    const handleToggle  = (e)=>{
        e.preventDefault()
        setIstoggle(!isToggle)
    }
  return (
    <div className='bg-slate-300 py-3 '>
        <div className='flex justify-between items-center px-2  w-full md:w-[90%] mx-auto'>
            <h1 className='text-2xl font-bold text-blue-400'>Health Care</h1>
            <div className='hidden md:flex justify-center items-center space-x-5 text-[15px] font-semibold text-slate-600'>
                <Link to='/' className='cursor-pointer hover:text-black'>Home</Link>
                <span className='cursor-pointer hover:text-black'>Contact Us</span>
                <span className='cursor-pointer hover:text-black'>Service</span>
                <Link to='/register' className='cursor-pointer hover:text-black'>Sighn Up</Link>
                <Link to='/login' className='bg-blue-300 px-3 py-1  rounded-sm'>Log In</Link>
            </div>
            
            <div className='md:hidden' onClick={handleToggle}>
                <FaBars className='text-black cursor-pointer text-'></FaBars>
            </div>

            <div className={`fixed  top-[58px] right-0 p-6 flex flex-col  space-y-3 h-full ${isToggle ? 'translate-x-0' : 'translate-x-full'}   text-white font-semibold bg-slate-600 w-3/4
                    transition-transform duration-200 ease-in-out
            
            `}>
                <span className='hover:text-black cursor-pointer p-2 hover:bg-white '>Home</span>
                <span className='hover:text-black cursor-pointer p-2 hover:bg-white '>Contact Us</span>
                <span className='hover:text-black cursor-pointer p-2 hover:bg-white '>Service</span>
                <Link to='/register' className='hover:text-black cursor-pointer p-2 hover:bg-white '>Sighn Up</Link>
                <Link to='/login' className='hover:text-black cursor-pointer p-2 hover:bg-white '>Log In</Link>
            </div>
            {
                isToggle && <div className='fixed inset-0' onClick={()=> setIstoggle(!isToggle)}>
                    
                </div>
                
            }
        </div>
    </div>
  )
}
