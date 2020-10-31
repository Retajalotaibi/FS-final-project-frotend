import React from "react";
import ProfileInfo from "./ProfileInfo";
import Header from "../HomePageComponent/Header/Header";

class Profile extends React.Component {
  // componentDidMount() {
  //   axios.get("http://localhost:4000//profile").then(
  //     (res) => {
  //       this.setState({
  //         user: res.data,
  //       });
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  logout = () => {
    localStorage.removeItem("jwt"); // this is how u remove an item from localstorage
    window.location.reload();
  };
  render() {
    //   if (this.state.user) {
    //     return <h1>hi </h1>;

    return (
      <>
        <Header />

        <header className="profile-header">
          <div className="head"></div>
          <ProfileInfo user={this.props.user} />
        </header>
      </>
    );
  }
}

export default Profile;
