import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../redux/authSlice'
import { Navigate } from 'react-router-dom'

export const ProtectedRout = ({children}) => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)
  useEffect(()=>{
    
    if(isAuthenticated === null){
        dispatch(checkAuth())
    }
  },[dispatch ,isAuthenticated])

  if (isAuthenticated === null) return <h1>Loading...</h1>
  return isAuthenticated ? children : <Navigate to='/login'></Navigate>

}
