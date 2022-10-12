import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes'

import Global from './styles/Global'
import 'react-toastify/dist/ReactToastify.min.css';

function App() {


  return (
    <div>
      <Global/>
      <Routes />
      <ToastContainer autoClose={3000}/>
    </div>
  )
}

export default App