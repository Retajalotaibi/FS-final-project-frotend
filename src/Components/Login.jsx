import React from "react";
import { NavLink } from "react-router-dom";
import * as userService from "../services/authServices";
import Loader  from "react-loader-spinner"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },
      para: false
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="skewed"> </div>

        <section className="login">
          <form method="POST" id="REGform">
            <legend>
              <div className="container">
                <div className="sign-up">
                  <h1>تسجيل الدخول</h1>
                </div>

                <div className="input__div">
                  <h3>البريد الالكتروني</h3>
                  <input
                    type="email"
                    placeholder="اكتب ايميلك "
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="input__div">
                  <h3>كلمة المرور </h3>
                  <input
                    type="password"
                    placeholder="اكتب كلمة المرور "
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                  ></input>
                  <NavLink exact to="/register" className="unregistered">
                    <p>لا تملك حساب ؟ </p>
                  </NavLink>
                </div>
                <div onClick={this.LogingIn} className="submit-btn">
                  <h4>سجل</h4>

                  {this.state.para ? (
                    <Loader
                      type="ThreeDots"
                      color="#FF69B4"
                      height={50}
                      width={50}
                      timeout={3000}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </legend>
          </form>
          <div className="login-info">
            <img src="./images/ppl-talking.png"></img>
            <h1>لغة الاشارة هي انبل هدية اعطاها الله للصم</h1>
          </div>
        </section>
      </>
    );
  }
  LogingIn = async (e) => {
    this.setState({ para: true });
    try {
      const { data: jwt } = await userService.login(
        this.state.email,
        this.state.password
      );
      window.location.reload();
      localStorage.setItem("jwt", jwt);
    } catch (error) {
      console.log(error);
    }
    this.setState({ para: false });
  };
}

export default Login;
