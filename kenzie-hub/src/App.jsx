import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes'

import Global from './styles/Global'
import 'react-toastify/dist/ReactToastify.min.css';

function App() {


  return (
    <div>
      <Global/>
      <Routes />
      <ToastContainer/>
    </div>
  )
}

export default App