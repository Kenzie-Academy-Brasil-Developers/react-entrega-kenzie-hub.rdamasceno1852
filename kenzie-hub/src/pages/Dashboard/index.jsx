import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Header, UserData } from "./style";

const Dashboard = () => {
  const id = localStorage.getItem("@Kenzie_Hub_id");
  const token = localStorage.getItem("@Kenzie_Hub_token");
  const [userProfile, setUserProfile] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((response) => {
        setUserProfile(response.data);
        return response;
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    const withOutToken = localStorage.clear();
    navigate("/");
    return withOutToken;
  };

  return (
    <>
    {token ? 
        (<div>
          <Header> 
            <h2>Kenzie Hub</h2>
            <button variant={"disable"} onClick={logout}>
              Sair
            </button>
          </Header>
          <UserData>
            <h1>Olá {userProfile.name}</h1>
            <p> {userProfile.course_module}</p>
          </UserData>
        </div>
          )
          :
          (<Navigate to='/' replace={true}/>)}
    </>
  );
};

export default Dashboard;
