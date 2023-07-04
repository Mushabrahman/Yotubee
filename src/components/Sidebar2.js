import React, { useState } from "react";
import {
  BsHouseDoor,
  BsController,
  BsCollectionPlay,
  BsCodeSlash,
  BsCloudDrizzle,
  BsCupHot,
  BsDisplay,
  BsEmojiSmile,
  BsEvFront,
  BsGeoAlt,
  BsGift,
  BsHandbag,
  BsInstagram,
  BsMagic,
  BsCamera,
  BsHeartPulse,
  BsPhone,
} from "react-icons/bs";
import { TbCricket, TbBeach, TbMoodHeart } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_URL } from "./constants"
import { useContext } from 'react';
import { MyContext } from './MyContext';

const Sidebar = () => {

  const { text, setText } = useContext(MyContext);
 
  const categoriesArr = [
    { icon: <BsHouseDoor />, name: "Home" },
    { icon: <BsController />, name: "Gaming" },
    { icon: <BsCollectionPlay />, name: "Movies" },
    { icon: <BsCodeSlash />, name: "Reactjs" },
    { icon: <BsHeartPulse />, name: "LoveToday" },
    { icon: <BsCloudDrizzle />, name: "Weather" },
    { icon: <BsCupHot />, name: "Coffee" },
    { icon: <TbCricket />, name: "Cricket" },
    { icon: <BsDisplay />, name: "NamasteJs" },
    { icon: <TbMoodHeart />, name: "Wedding" },
    { icon: <BsEmojiSmile />, name: "Festivals" },
    { icon: <BsEvFront />, name: "Tesla" },
    { icon: <BsGeoAlt />, name: "Tourism" },
    { icon: <BsGift />, name: "Gifts" },
    { icon: <BsHandbag />, name: "Shopping" },
    { icon: <BsInstagram />, name: "InstaReels" },
    { icon: <BsMagic />, name: "Interviews" },
    { icon: <BsCamera />, name: "Camera" },
    { icon: <BsDisplay />, name: "ChatGPT" },
    { icon: <BsPhone />, name: "iphone" },
    { icon: <TbMoodHeart />, name: "Dating" },
    { icon: <TbBeach />, name: "Vacations" },
  ];


  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

 





  if (!isMenuOpen) return null;

  return (
    <div className="sidebar">
      {categoriesArr.map((eachcatg, i) => (
        
        <p
          key= {i}
        >
          
          <span className="sidebar-icon">{eachcatg.icon}</span>
          <span className="sidebar-name">{eachcatg.name+i}</span>
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
