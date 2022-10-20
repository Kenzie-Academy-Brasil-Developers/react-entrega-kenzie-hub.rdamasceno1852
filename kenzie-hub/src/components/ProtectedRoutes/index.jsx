import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import { Navigate, Outlet, useLocation } from "react-router-dom";
const ProtectedRoutes = () => {
    
    const { user, currentRoute, setCurrentRoute, loading} = useContext(UserContext)
  const location = useLocation()

    if(loading){
      <h1>Carregando...</h1>
    }
    return user ? <Outlet/> : <Navigate to='/' replace state={{from: location}} /> 
   
  
}

export default ProtectedRoutes