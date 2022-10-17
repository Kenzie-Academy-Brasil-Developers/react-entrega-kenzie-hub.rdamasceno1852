import { ToastContainer } from "react-toastify";
import Routes from "./routes/routes";

import Global from "./styles/Global";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <Global />
      <UserProvider>
        <Routes />
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
