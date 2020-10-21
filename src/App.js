import React from 'react';
import LoginPage from "./Pages/Login"
import './App.css';
import RegisterPage from "./Pages/RegisterPage"
import { BrowserRouter, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage"
import HomepagePAGE from './Pages/homepagePAGE';

 
class App extends React.Component {
  
  state={
    response:"",
    value: "",
      username: "",
      email:"",
      password:"",
  }

  
  render(){
   
  return (
    <>
    <BrowserRouter>
     <Route
            exact
            path="/register"
            render={(props) => (
              <RegisterPage />
            )}
          />
           <Route
            exact
            path="/login"
            render={(props) => (
              <LoginPage  />
            )}
            

          />
           <Route
            exact
            path="/profile"
            render={(props) => (
              <ProfilePage  />
            )}
            

          />
          <Route
            exact
            path="/homepage"
            render={(props) => (
              <HomepagePAGE  />
            )}
            

          />
    </BrowserRouter>
           
    </>
    
  ); }
}

export default App;
