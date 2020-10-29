import React from "react";
import Profile from "../Components/profileComponents/Profile";

class ProfilePage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Profile user={this.props.user} />
      </>
    );
  }
}

export default ProfilePage;
