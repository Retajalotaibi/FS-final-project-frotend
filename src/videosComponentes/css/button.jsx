import React from "react";

const ChallengeButton = (props) => {
  return (
    <button
      className="answer-button"
      onClick={() => props.handleClick(props.answer)}
    >
      {props.answer}
    </button>
  );
};

export default ChallengeButton;
