import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { Navigate, Outlet, useLocation } from "react-router-dom";
const ProtectedRoutes = () => {
    
    const { user, loading} = useContext(UserContext)
  const location = useLocation()

    if(loading){
     return <h1>Carregando...</h1>
    }
    return user ? <Outlet/> : <Navigate to='/' replace state={{from: location}} /> 
   
  
}

export default ProtectedRoutes