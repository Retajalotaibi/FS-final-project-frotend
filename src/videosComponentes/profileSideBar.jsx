import React, { Component } from "react";
import ProgressCounter from "./progressCounter";
import "./css/profileSideBar.css";
class ProfileSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  donePercent = () => {
    let done = 0;
    this.props.userData.forEach((userD) =>
      userD.completed == true ? (done += 33) : (done += 0)
    );
    return done;
  };
  render() {
    this.donePercent();
    return (
      <div className="profileSideBar-container">
        <div className="profile-container">
          <img src="./images/profile.png" width={80} />
          <h4>{this.props.user.username}</h4>
          <div className="cards-container"></div>
        </div>
      </div>
    );
  }
}

export default ProfileSideBar;
