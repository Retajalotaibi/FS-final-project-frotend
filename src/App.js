import React, { Component } from "react";
import "./App.css";
import LeftNav from "./videosComponentes/LeftNav";
import ResponsivePlayer from "./videosComponentes/ResponsivePlayer";
import ProfileSideBar from "./videosComponentes/profileSideBar";
import data from "./data.json";
import LessonPage from "./pages/lessonPage";
import { Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Route
          path="/L/:id"
          render={(props) => <LessonPage {...props} data={data} />}
        />

        {/* <LeftNav data={data} />
        <ResponsivePlayer data={data} />
        <ProfileSideBar /> */}
      </div>
    );
  }
}

export default App;
