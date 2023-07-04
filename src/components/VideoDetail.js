import React,{useEffect,useState} from 'react';
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import {VIDEO_INFO_API_URL}
from "./constants"
import { useSelector } from "react-redux";


const VideoDetail = ({videoId}) => {
    const [videoDetail, setvideoDetail] = useState([]);


    useEffect(() => {
        videoDetails();
      }, [videoId]);

    const videoDetails = async () => {
        const data = await fetch(VIDEO_INFO_API_URL + videoId);
        const json = await data.json();
        setvideoDetail(json.items);
      };

    const date1=videoDetail[0]?.snippet?.publishedAt;
    const date2=date1?.split('T');
  
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={isMenuOpen ? "video-details" : "video-details-after"}>

        <div className='vd-part1'>{videoDetail[0]?.snippet?.title}</div>

        <div className='vd-part2'>
            <div className='vd-part2-left'>
                <img className='video-icon' src={videoDetail[0]?.snippet?.thumbnails?.medium.url} width='55px' height='55px'/>
                <div className='channel-subscribers' >
                    <div className='channel' >{videoDetail[0]?.snippet?.channelTitle}</div>
                    <div className='subscribers'>{videoDetail[0]?.statistics?.commentCount} subscribers</div>
                </div>
                <div className='subscribe-btn'><button>Subscribe</button></div>
            </div>
            
            <div className='vd-part2-right'  style={{display:'flex'}}>
                <div className='like-btn'>
                    <div>
                        <button className='btn1'>
                            <span><BiLike fontSize='23px'/></span>
                            <span className='likecount' style={{paddingLeft:'6px',fontSize:'16px'}}>{videoDetail[0]?.statistics?.likeCount}</span>
                        </button>
                    </div>
                    <div>
                        <button className='btn2'>< BiDislike fontSize='23px' /></button>
                    </div>   
                </div>
                <div className='share-btn'>
                    <button style={{display:'flex'}}>
                        <span><TbShare3 fontSize='18px'/></span>
                        <span className='share' style={{paddingLeft:'6px'}}>Share</span>
                    </button>
                </div>
                <div className='share-btn'>
                    <button style={{display:'flex'}}>
                        <span><TfiDownload fontSize='15px'/></span>
                        <span className='download' style={{paddingLeft:'7px'}}>Download</span>
                    </button>
                </div>    
            </div> 
        </div>

        <div className="vd-part3">
            <div className='views-date'><span style={{fontWeight:'600'}}>{videoDetail[0]?.statistics?.viewCount} views </span> <span style={{color:'blue'}}>{videoDetail[0]?.snippet?.tags.map((tag)=>('#'+tag))}</span> </div>
            <div className='description'>{videoDetail[0]?.snippet?.description}</div>
        </div>

    </div>
  )
}

export default VideoDetail