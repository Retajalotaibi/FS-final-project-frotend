import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./css/responsive-player.css";
class ResponsivePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="player-container">
        <h2>the title of the video</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=2MHsDNV9lgY"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    );
  }
}

export default ResponsivePlayer;
