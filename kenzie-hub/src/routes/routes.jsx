import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'


const RoutesMain = () => {
  return (
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/' element={<Register />}/>
    <Route path='/' element={<Dashboard />}/>
    <Route path='/' element={<Navigate to={'/'}/>}/>

    </Routes>
    )
}

export default RoutesMain