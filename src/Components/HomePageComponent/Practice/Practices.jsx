import React from "react";
import Practice from "./Practice";
import "./Practice.css";

const Practices = (props) => {
  return (
    <div className="practice-container" id="challenge">
      <div className="practice-cards">
        <Practice
          title="التحدي الأول"
          img="./images/imgs/rocket.png"
          path="challenge1"
        />
        <Practice
          title="التحدي الثاني"
          img="./images/imgs/rocket.png"
          path="challenge2"
        />
      </div>
    </div>
  );
};

export default Practices;
