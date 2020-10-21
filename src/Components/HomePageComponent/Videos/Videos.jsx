import React from 'react';
import Video from "./Video"
import "./Videos.css";



const Videos = () => {
    return ( 
    <div className="videos-container">
        <Video title="العنوان" content="المحتوى" img="./logo192.png" />
        <Video title="العنوان" content="المحتوى" img="./logo192.png" />
        <Video title="العنوان" content="المحتوى" img="./logo192.png" />
    </div> 
    );
}
 
export default Videos;