import { Navigate, Route, Routes } from "react-router-dom"
import ProtectedRoutes from "../components/ProtectedRoutes"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"

const RoutesMain = () => (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} /> 
      </Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )


export default RoutesMain