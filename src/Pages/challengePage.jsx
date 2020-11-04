import React, { Component } from "react";
import data from "../challenges.json";
import ChalllengeVideo from "../videosComponentes/challengeVideo";
import ChallengeButton from "../videosComponentes/css/button";
import Header from "../Components/HomePageComponent/Header/Header";
import { NavLink } from "react-router-dom";
class ChallengePage extends Component {
  state = {
    myClass: "",
    RoW: "",
  };
  handleClick = (userAnswer) => {
    let id = this.props.match.params.type;
    let challenge = data.filter((data) => data.id == id);
    if (userAnswer == challenge[0].correctAnswer) {
      this.setState({ myClass: " R", RoW: "إجابه صحيحه" });
    } else {
      this.setState({ myClass: " W", RoW: "إجابه خاطئه" });
    }
  };

  render() {
    let id = this.props.match.params.type;
    let challenge = data.filter((data) => data.id == id);
    let shuffled = challenge[0].Array.sort(() => Math.random() - 0.5);
    return (
      <div className="ch-page">
        <header>
          <ul className="menu">
            <NavLink
              to={
                this.props.match.params.type == "challenge1"
                  ? "/callenge/challenge2"
                  : "/"
              }
            >
              <li>التحدي التالى</li>
            </NavLink>
            <NavLink to="/">
              <li>الرجوع</li>
            </NavLink>
          </ul>
        </header>
        <ChalllengeVideo url={challenge[0].url} />
        <div className="CH-container">
          <h2>تصف هذه الحركه اي كلمه ؟</h2>
          <div className="answers">
            {shuffled.map((item) => (
              <ChallengeButton answer={item} handleClick={this.handleClick} />
            ))}
          </div>
          <h2 className={this.state.myClass} style={{ paddingTop: "40px" }}>
            {this.state.RoW}
          </h2>
        </div>
      </div>
    );
  }
}

export default ChallengePage;
