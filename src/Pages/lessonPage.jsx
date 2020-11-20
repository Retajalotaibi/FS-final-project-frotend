import React, { Component } from "react";
import LeftNav from "../videosComponentes/LeftNav";
import ResponsivePlayer from "../videosComponentes/ResponsivePlayer";
import ProfileSideBar from "../videosComponentes/profileSideBar";
import userData from "../userData.json";
class LessonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  finddata = () => {
    const path = this.props.location.pathname;
    const splitedPath = path.split("-");
    const nPath = splitedPath[0].replace("/", "");

    return this.props.data.filter((item) => item.id.includes(nPath));
  };

  findUserData = () => {
    const path = this.props.location.pathname;
    const splitedPath = path.split("-");
    const nPath = splitedPath[0].replace("/", "");

    return userData.filter((item) => item.title.includes(nPath));
  };

  handleCompleting = (obj, lesson) => {
    if (obj.played >= 0.7) {
      console.log("done");
    }
  };
  render() {
    return (
      <div className="videoPage-container">
        <LeftNav data={this.finddata()} />
        <ResponsivePlayer
          {...this.props}
          data={this.props.data}
          firstData={this.props.data[0]}
          onComplet={this.handleCompleting}
        />
        <ProfileSideBar
          userData={this.findUserData()}
          name="name"
          user={this.props.user}
        />
      </div>
    );
  }
}

export default LessonPage;
