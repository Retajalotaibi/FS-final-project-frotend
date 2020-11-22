import React from "react";
import LoginPage from "./Pages/Login";
import "./App.css";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import LessonPage from "./Pages/lessonPage";
import data from "./data.json";
import HomePage from "./Pages/HomePage";
import axios from "axios";
import "./videosComponentes/css/page.css";
import ChallengePage from "./Pages/challengePage";

class App extends React.Component {
  state = {
    user: null,
  };
  componentDidMount = () => {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwt"
    );
    axios
      .get("https://talent2.herokuapp.com/api/v1")
      .then((res) => {
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
                  path="/profile/user"
                  render={(props) => <ProfilePage user={this.state.user} />}
                />
                <Route
                  exact
                  path="/:id"
                  render={(props) => (
                    <LessonPage {...props} data={data} user={this.state.user} />
                  )}
                />
                <Route
                  exact
                  path="/callenge/:type"
                  render={(props) => <ChallengePage {...props} />}
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
        </BrowserRouter>
      </>
    );
  }
}
export default App;
///////////////////////////////////////////////////////
// import HomePage from "./Pages/HomePage";

// import { Route, Redirect } from "react-router-dom";

// function App(props) {
//   console.log(props);
//   return (

//   );
// }
/*
class App extends Component {
  

  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
       🍭here should go the route to logIn 
        
      </div>
}*/
