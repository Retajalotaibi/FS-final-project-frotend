import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/lessonPage";
import data from "./data.json";
import { Route, Redirect } from "react-router-dom";
import "./videosComponentes/css/page.css";
import ChallengePage from "./pages/challengePage";
// function App(props) {
//   console.log(props);
//   return (

//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: true };
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        {/* 🍭here should go the route to logIn */}
        <Route
          exact
          path="/:id"
          render={(props) => {
            if (!this.state.user) return <Redirect to="login" />;
            return <LessonPage {...props} data={data} />;
          }}
        />
        <Route exact path="/callenge/:type" component={ChallengePage} />
      </div>
    );
  }
}

export default App;
