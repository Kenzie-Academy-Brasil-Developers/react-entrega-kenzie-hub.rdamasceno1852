import { useContext, useEffect } from "react";
import { Navigate} from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { Header, Main, UserData } from "./style";

const Dashboard = () => {
  const token = localStorage.getItem("@Kenzie_Hub_token");
  const {userLogout, user, setUser} = useContext(UserContext)

  console.log(user);
    useEffect(() => {
      api.defaults.authorization = `Bearer ${token}`

      api
        .get(`/profile`)
        .then((response) => {
          setUser(response.data);
          return response;
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <>
    {token ? 
        (<div>
          <Header> 
            <h2>Kenzie Hub</h2>
            <button variant={"disable"} onClick={userLogout}>
              Sair
            </button>
          </Header>
          <UserData>
            <h1>Olá {user.name}</h1>
            <p> {user.course_module}</p>
          </UserData>
          <Main>  
            <ul>
              
            </ul>
          </Main>
        </div>
          )
          :
          (<Navigate to='/' replace={true}/>)}
    </>
  );
};

export default Dashboard;
