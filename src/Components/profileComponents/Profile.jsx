import React from "react";
import ProfileInfo from "./ProfileInfo";
import Header from "../HomePageComponent/Header/Header";
import { NavLink } from "react-router-dom";

class Profile extends React.Component {
  logout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };
  render() {
    return (
      <>
        <NavLink to="/" className="back-to-home"><p>الرجوع الى الصفحة الرئيسية</p></NavLink>

        <header className="profile-header">
          <div className="head"></div>
          <ProfileInfo user={this.props.user} />
        </header>
      </>
    );
  }
}

export default Profile;
