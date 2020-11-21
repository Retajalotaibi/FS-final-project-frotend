import React, { Redirect } from "react";
import Register from "../Components/Register";

class RegisterPage extends React.Component {
  render() {
    return (
      <>
        <>
          {this.props.user ? <Redirect to="/" /> : <Register {...this.props} />}{" "}
        </>
        ;
      </>
    );
  }
}
export default RegisterPage;
