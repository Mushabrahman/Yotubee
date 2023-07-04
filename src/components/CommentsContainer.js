import { useEffect, useState } from "react";
import { COMMENTS_LIST_API } from "./constants";
import Comments from "./Comments.js";

const CommentsContainer = ({ videoId }) => {
  const [comments, setcomments] = useState([]);
 

  useEffect(() => {
    getcomments();
  }, []);

  const getcomments = async () => {
    const data = await fetch(COMMENTS_LIST_API + videoId);
    const json = await data.json();
    setcomments(json.items);
  };

  return (
    <div className="commentcomp">
      {comments.map((eachcomment) => (
        <Comments key={eachcomment.id.videoId===undefined?eachcomment.id:eachcomment.id.videoId} eachcomment={eachcomment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
