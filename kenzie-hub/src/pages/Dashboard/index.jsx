import { useContext } from "react";
import { Navigate } from "react-router-dom";
import TechsContainer from "../../components/TechsContainer";
import List from "../../components/TechsContainer/List";
import { UserContext } from "../../context/UserContext";
import { Header, Main, UserData } from "./style";



const Dashboard = () => {

  const {userLogout, user} = useContext(UserContext)
  
  return (
    <>
    {user ?
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
              <TechsContainer>
                <List/>
              </TechsContainer>
          </Main>
        </div>
          )
          :
          (<Navigate to='/' replace={true}/>)}
    </>
  );
};

export default Dashboard;
