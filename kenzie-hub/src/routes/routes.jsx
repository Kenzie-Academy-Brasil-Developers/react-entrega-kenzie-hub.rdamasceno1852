import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"

const RoutesMain = () => (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      {/* <Route path='/' element={<Dashboard />}/>  */}
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    
  )


export default RoutesMain