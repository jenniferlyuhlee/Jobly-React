import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode"
import JoblyApi from './api';
import useLocalStorageState from './hooks/useLocalStorageState';
import UserContext from './auth-user/UserContext';
import NavBar from './navigation/NavBar';
import RouteList from './navigation/RouteList';

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorageState('jobly-token');

  useEffect(function getUserInfo (){
    async function getCurrUser(){
      if (token){
        try{
          let {username} = jwtDecode(token);
          JoblyApi.token = token
          let currUser = await JoblyApi.getCurrUser(username);
          setCurrUser(currUser);
        }
        catch(err){
          setCurrUser(null);
        }
      }
    }
    getCurrUser();
  }, [token])

  // Handles signup, sets token and logs in new user
  async function signup(data){
    try{
      let token = await JoblyApi.signup(data)
      setToken(token)
      return {success: true};
    }
    catch(err){
      return {success: false, err}
    }
  }

  // Handles login, sets token 
  async function login(data){
    try{
      let token = await JoblyApi.login(data)
      setToken(token)
      return {success: true};
    }
    catch(err){
      return {success: false, err}
    }
  }

  // Logout of site, sets token and currUser to null
  function logout(){
    setCurrUser(null);
    setToken(null);
  }

  return (
    <UserContext.Provider value = {{currUser, setCurrUser}}>
      <NavBar logout={logout}/>
      <div className='container col-md-8'>
        <RouteList login={login} signup={signup}/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
