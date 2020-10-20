import React, { Component } from "react";
import LeftNav from "../videosComponentes/LeftNav";
import ResponsivePlayer from "../videosComponentes/ResponsivePlayer";
import ProfileSideBar from "../videosComponentes/profileSideBar";

class LessonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <LeftNav data={this.props.data} />
        <ResponsivePlayer
          {...this.props}
          data={this.props.data}
          firstData={this.props.data[0]}
        />
        <ProfileSideBar />
      </React.Fragment>
    );
  }
}

export default LessonPage;
