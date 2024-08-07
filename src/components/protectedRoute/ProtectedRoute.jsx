import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../../context/Context'
const ProtectedRoute = ({children}) => {
    const {isAuthenticated}=useGlobalContext()
  return (
        isAuthenticated ? children : <Navigate to="/" /> 
  )
}

export default ProtectedRoute