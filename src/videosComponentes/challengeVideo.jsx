import React from "react";
import ReactPlayer from "react-player";

const ChalllengeVideo = (props) => {
  console.log("video", props.url);
  return (
    <div className="player-wrapper-ch">
      <ReactPlayer className="react-player-ch" url={props.url} />
    </div>
  );
};

export default ChalllengeVideo;
