import React, { useEffect, useState } from "react";
import { BsCameraVideo, BsBell } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from './context';


const Header = () => {
  const { setText } = useContext(MyContext);
  const[videos,setvideos]=useState([]);
  const dispatch = useDispatch();
  const [searchquery, setSearchquery] = useState("");

  // useEffect(()=>{

  //   console.log(searchquery);

  //   const timer = setTimeout(() =>getSearchSuggesgtions(),200);

  //   return () => {
  //     clearTimeout(timer);
  //   }

  // },[searchquery])

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchquery) {
      navigate(`/search/${searchquery}`);
      setSearchquery("");
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className="hamburger"
          onClick={() => toggleMenuHandler()}
          src="https://th.bing.com/th/id/OIP.yS9IDzz_UZycALCuAYYNqwHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        />

        <Link to="/">
          <img
            className="youtube-icon"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            onClick={()=>{setText("Home")}}
          />
        </Link>
      </div>

      <div style={{ display: "flex" }} className="head-mid">
        <input
          placeholder="Search"
          value={searchquery}
          onChange={(e) => {
            setSearchquery(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            handleSearch(e);
          }}
        >
          <img
            className="Search-icon"
            src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
          />
        </button>
      </div>

      <div className="head-right">
        <span className="head-right-span">
          <BsCameraVideo className="header-icon1" fontSize="30px" />
        </span>
        <span className="head-right-span">
          <BsBell className="header-icon2" fontSize="27px" />
        </span>
        <span className="head-right-span">
          <BiUserCircle className="header-icon3" fontSize="30px" />
        </span>
      </div>
    </div>
  );
};

export default Header;
