import React from "react";
import Video from "./Video";
import "./Videos.css";

const Videos = () => {
  return (
    <div className="videos-container" id="lessons">
      <Video
        title="حروف الإشاره"
        content="٤ فيديوهات"
        img="./images/3Pics/img1.png"
        path={"lesson1-1"}
      />
      <Video
        title="كلمات متنوعة"
        content="٤ فيدويوهات"
        img="./images/3Pics/howToDeal.png"
        path={"lesson2-1"}
      />
      <Video
        title="التعابير بلغة الإشاره"
        content="٤ فيديوهات"
        img="./images/3Pics/img3.png"
        path={"lesson3-1"}
      />
    </div>
  );
};

export default Videos;
