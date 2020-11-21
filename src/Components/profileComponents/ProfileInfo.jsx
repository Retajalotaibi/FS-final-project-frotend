import React from "react";
import YourName from "./YourName";
class ProfileInfo extends React.Component {
  logout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };
  render() {
    return (
      <>
        <section className="Profile-Info">
          <div className="container">
            <div className="Info">
              <div className="pfp"></div>
              <h1>{this.props.user.username}</h1>
              <div className="personal-info">
                <h6>{this.props.user.email}</h6>
                <h6>{this.props.user.number}</h6>
                <h6>{this.props.user.city}</h6>
              </div>
              <button
                className="logout-btn"
                style={{ cursor: "pointer" }}
                onClick={this.logout}
              >
                تسجيل خروج
              </button>
            </div>
            <div className="name-alphabet-container">
              <YourName />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProfileInfo;
