import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"

const RoutesMain = ({ toast, }) => (
    <Routes>
      <Route path='/' element={<Login  toast={toast}/>} />
      <Route path='/register' element={<Register toast={toast}/>} />
      <Route path='/dashboard' element={<Dashboard/>} /> 
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    
  )


export default RoutesMain