import React from "react";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";

const Comments = ({ eachcomment }) => {
  return (
    <div>
      <div className="comments">
        <img
          src={
            eachcomment.snippet.topLevelComment.snippet.authorProfileImageUrl
          }
          width="48px"
          height="48px"
        />
        <div className="comment-content">
          <div
            style={{
              color: "rgb(67, 66, 66)",
              fontWeight: "500",
              fontSize: "13px",
            }}
          >
            {eachcomment.snippet.topLevelComment.snippet.authorDisplayName}
          </div>
          <div
            style={{
              color: "rgb(93, 92, 92)",
              fontSize: "15px",
              marginTop: "5px",
            }}
          >
            {eachcomment.snippet.topLevelComment.snippet.textDisplay}
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "65px", marginTop: "8px" }}>
        <span style={{ marginRight: "10px" }}>
          <SlLike fontSize="20px" color="rgb(74, 73, 73)" />
        </span>
        <span style={{ color: "grey", marginRight: "10px" }}>
          {eachcomment?.snippet?.topLevelComment?.snippet?.likeCount}
        </span>
        <span>
          <SlDislike fontSize="20px" color="rgb(74, 73, 73)" />
        </span>
        <span style={{ color: "grey", fontWeight: "bold", marginLeft: "20px" }}>
          Reply
        </span>
      </div>
    </div>
  );
};

export default Comments;
