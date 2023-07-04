import React from "react";
import { Link } from "react-router-dom";

const Videocard = ({ eachvideo }) => {
  const { snippet, statistics, id } = eachvideo;
  const { channelTitle, title, thumbnails } = snippet;


  return (
    <Link className="no-decoration" key={eachvideo.id.videoId===undefined?eachvideo.id:eachvideo.id.videoId} to={`/watch?v=${eachvideo.id.videoId===undefined?eachvideo.id:eachvideo.id.videoId}`}>
      <div className="card">
        <img className="video-thumbnail" src={thumbnails?.medium?.url} />
        <div className="card-line1">
          <img
            className="round-image"
            src={thumbnails?.medium?.url}
            width="30px"
            height="30px"
          />
          <div className="line1">
            {title} | {snippet?.description}
          </div>
        </div>
        <div className="card-line2">{channelTitle}</div>
      </div>
    </Link>
  );
};

export default Videocard;
