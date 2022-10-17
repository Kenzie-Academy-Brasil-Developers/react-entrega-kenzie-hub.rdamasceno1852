import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProtectedRoutes = () => {
    
    const { user } = useContext(UserContext)
    console.log(user);
    const navigate = useNavigate()
    // console.log(user);

    useEffect(() => {
      if(!user){
        navigate('/')
      }
    },[])

    return (
    <>
      {user && <Outlet/>}
    </>
  )
}

export default ProtectedRoutes