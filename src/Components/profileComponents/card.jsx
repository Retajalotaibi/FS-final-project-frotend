import React, { useState } from "react";
import alphabetData from "./alphabet.json";

class Card extends React.Component {
  state = {
    img: "",
  };
  handleCard = () => {};
  render() {
    return (
      <>
        <div className="cards">
          <div className="card">
            <div className="card__image">
              <img name="img" />
            </div>
            <div className="card__desc"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
