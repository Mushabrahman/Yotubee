import React,{useState} from 'react'
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SEARCH_VIDEO_LIST_API,YOUTUBE_VIDEO_URL  } from './constants.js'
import { useContext } from 'react';
import { MyContext } from './context';


const Body = () => {

 
  const { text, setText } = useContext(MyContext);
  const[videos,setvideos]=useState([]);
  const[isLoading,setIsLoading]  = useState(false)
  


  useEffect(()=>{
    getvideos( );
  },[text])

  const getvideos= async () =>{
    setIsLoading(true)
    const data = await fetch(text==="Home"?YOUTUBE_VIDEO_URL:SEARCH_VIDEO_LIST_API+text);
    const json = await data.json();
    setvideos(json.items);
    setIsLoading(false)
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  return (
    <div className={isMenuOpen?'bodyafter':'body'}>
   <Sidebar/>
   <VideoContainer videos={videos} setText={setText} isLoading={isLoading}/>
    </div>
  )
}

export default Body;
