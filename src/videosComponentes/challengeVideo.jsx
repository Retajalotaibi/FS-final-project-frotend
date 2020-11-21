import React from "react";
import ReactPlayer from "react-player";

const ChalllengeVideo = (props) => {
  return (
    <div className="player-wrapper-ch">
      <ReactPlayer className="react-player-ch" url={props.url} />
    </div>
  );
};

export default ChalllengeVideo;
