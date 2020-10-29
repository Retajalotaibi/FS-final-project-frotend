import React from "react";
import Header from "../Components/HomePageComponent/Header/Header";
import Hero from "../Components/HomePageComponent/Hero/Hero";
import Videos from "../Components/HomePageComponent/Videos/Videos";
import Infos from "../Components/HomePageComponent/Info/Infos";
import Practice from "../Components/HomePageComponent/Practice/Practices";
import Footer from "../Components/HomePageComponent/Footer/Footer";

class HomePage extends React.Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.user ? (
          <>
            <Header />
            <Hero />
            <Videos />
            <Infos />
            <Practice />
            <Footer />
          </>
        ) : (
          <>
            <Hero />
          </>
        )}
      </>
    );
  }
}

export default HomePage;
