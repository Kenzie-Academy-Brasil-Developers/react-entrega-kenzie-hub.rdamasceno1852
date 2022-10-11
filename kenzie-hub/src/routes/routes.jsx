import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"

const RoutesMain = ({ ToastContainer, toast }) => (
    <Routes>
      <Route path='/' element={<Login  toast={toast}/>}/>
      <Route path='/register' element={<Register toast={toast}/>}/>
      {/* <Route path='/' element={<Dashboard />}/>  */}
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    
  )


export default RoutesMain