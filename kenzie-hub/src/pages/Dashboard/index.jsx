import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { Header, Main, UserData } from "./style";


const Dashboard = () => {

  const {userLogout, user, setUser} = useContext(UserContext)
  
 

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
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
          </Main>
        </div>
          )
          :
          (<Navigate to='/' replace={true}/>)}
    </>
  );
};

export default Dashboard;
