import React, { Component } from "react";
import "./App.css";
import LeftNav from "./videosComponentes/LeftNav";
import ResponsivePlayer from "./videosComponentes/ResponsivePlayer";
import ProfileSideBar from "./videosComponentes/profileSideBar";
class App extends Component {
  render() {
    return (
      <div className="container">
        <LeftNav />
        <ResponsivePlayer />
        <ProfileSideBar />
      </div>
    );
  }
}

export default App;
