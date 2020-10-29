import React from "react";
import Practice from "./Practice";
import HangMan from "./imgs/rocket.png";
import "./Practice.css";

const Practices = () => {
  return (
    <div className="practice-container">
      <div className="practice-cards">
        <Practice title="Play Hang Man" img={HangMan} />
        <Practice title="Play Hang Man" img={HangMan} />
      </div>
    </div>
  );
};

export default Practices;
