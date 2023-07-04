import React from 'react';
import Shimmer from "./Shimer.js"
import { useSelector } from 'react-redux';



const ShimmerCompOne = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={isMenuOpen?'videoContainerAfter':"videoContainer"}>
        <div className='all-videos'>{
           Array(15)
           .fill('').map((eacharray,i)=><Shimmer key={i}/>)
            }
        </div> 
    </div>
  )
}

export default ShimmerCompOne