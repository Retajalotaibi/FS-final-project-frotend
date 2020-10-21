import React from 'react';

const Video = (props) => {
    return ( 
    <div className="video-container">
        <div className="videos-right">
        <h3 className="video-title">{props.title}</h3>
        <p className="video-content">{props.content}</p>
        </div>
        <div className="videos-left">
            <img className="small-logo" src="./icon.png" alt=""/>
            <img src={props.img} alt={props.img} className="video-background"/>
        </div>
    </div> 
    );
}
 
export default Video;