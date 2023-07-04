import React from "react";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import VideoDetail from "./VideoDetail";
import { useState } from "react";
import { YOUTUBE_VIDEO_URL, SUGGESTED_VIDEO_LIST_API_URL,VIDEO_INFO_API_URL } from "./constants";
import { useEffect } from "react";
import CommentContainer from "./CommentsContainer.js";
import Sidebar from "./Sidebar";
import VideoSuggestions from "./VideoSuggestions";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice.js";
import { useSelector } from "react-redux";


const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [suggested, setsugested] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("LoveToday");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getvideos();
 
  }, [videoId]);



  const getvideos = async () => {
    const data = await fetch(SUGGESTED_VIDEO_LIST_API_URL + videoId);
    const json = await data.json();
    setsugested(json.items);
  };
 
 

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={isMenuOpen ? "watch-page" : "watch-page-after"}>
      {/* <Sidebar
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      /> */}
      <div className="player">
        <div className="react-player">
          <ReactPlayer
            url={"https://www.youtube.com/embed/" + searchParams.get("v")}
            width="100%"
            height="500px"
            controls
          />
        </div>
        <div>
           <VideoDetail  videoId={videoId}/>
        </div>
        <div>
          <CommentContainer videoId={videoId} />
        </div>
      </div>
      <div className="suggest-videos">
        {suggested.map((eachvideo) => (
          <VideoSuggestions  key={eachvideo.id.videoId===undefined?eachvideo.id:eachvideo.id.videoId} eachvideo={eachvideo} />
        ))}
      </div>
    </div>
  );
};
export default WatchPage;
