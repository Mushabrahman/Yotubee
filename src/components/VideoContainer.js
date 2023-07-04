import React from 'react'
import Videocard from "./Videocard.js"
import { useSelector } from 'react-redux';
import Shimmer from './Shimer.js';
import ShimmerCompOne from './ShimmerCompOne.js';




const VideoContainer = ({videos,isLoading}) => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  
    if(!videos) return null
 
  
  return (
    <div className={isMenuOpen?'videoContainerAfter':"videoContainer"}>
  {isLoading ? (
<ShimmerCompOne/>
      ) : (
      <div className='all-videos'>
            {videos?.map((eachvideo)=>(
               <Videocard key={eachvideo.id.videoId===undefined?eachvideo.id:eachvideo.id.videoId} eachvideo={eachvideo}/>    
            ))}  
       
        </div>
        )
      }
      
    </div>
  )
}

export default VideoContainer;
