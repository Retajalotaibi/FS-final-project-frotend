import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../Components/Login";
class LoginPage extends React.Component {
  render() {
    console.log(this.props);
    return <>{this.props.user ? <Redirect to="/" /> : <Login />} </>;
  }
}
export default LoginPage;
