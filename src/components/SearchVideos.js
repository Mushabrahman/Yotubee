import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';
import { SEARCH_VIDEO_LIST_API } from "./constants";
import { useSearchParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useContext } from 'react';
import { MyContext } from './context';

const SearchVideos = () => {

  const { text, setText } = useContext(MyContext);

  console.log(text);

  
    const[videos,setvideos]=useState([ ]);
    const params =useParams();
    
    useEffect(()=>{
        getSearchSuggesgtions();
    },[params.searchTerm])

    const getSearchSuggesgtions = async () => {
        const data = await fetch(SEARCH_VIDEO_LIST_API+params.searchTerm);
        const json =await data.json();
        setvideos(json.items)
       }

       const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    
  return (
    <div className={isMenuOpen ? "bodyafter" : "body"}>
        <Sidebar/>
        <VideoContainer videos={videos}  />
    </div>
  )
}

export default SearchVideos