import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Videoplayer.css'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

const VideoPlayer = (props) => {
    const vii=useLocation()
    const v=vii.state

    console.log(v)
  return (

    //console.log("in video")
    <div className="video-player-contain">
    <div className="video-player">
      
      <video src={v.submission.mediaUrl}  controls autoplay />
      <h2>{v.submission.title}</h2>
      <div className="video-actions">
            <button className="action-button">
            <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <button className="action-button">
            <FontAwesomeIcon icon={faThumbsDown} />
            </button>
          </div>
          <br/>
          
          <h5>25 views ,    Uploaded on 31st March,2023</h5>
          <p className="video-description">{v.submission.description}</p>
      
        
    </div>
    </div>
  );
};

export default VideoPlayer;
