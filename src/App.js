import React from "react";
import LoginPage from "./Pages/Login";
import "./App.css";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import axios from "axios";

class App extends React.Component {
  state = {
    user: null,
  };
  componentDidMount = () => {
    console.log(localStorage.getItem("jwt"));
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwt"
    );
    axios
      .get("http://localhost:4000/")
      .then((res) => {
        console.log(res, "123");
        if (res.data.user !== "you dont have permission") {
          this.setState({
            user: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            {this.state.user ? (
              <>
                <Route
                  exact
                  path="/"
                  render={(props) => <HomePage user={this.state.user} />}
                />
                <Route
                  exact
                  path="/profile"
                  render={(props) => <ProfilePage user={this.state.user} />}
                />
              </>
            ) : (
              <Redirect to="/login" />
            )}

            <Route
              exact
              path="/register"
              render={(props) => <RegisterPage user={this.state.user} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <LoginPage user={this.state.user} />}
            />
          </>

          {/* <Route
            exact
            path="/L:id"
            render={(props) => {
              if (!this.state.user) {
                return <Redirect exact to="/login" />;
              } else {
                return <Redirect exact to="/profile" />;
              }
            }}
          /> */}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
