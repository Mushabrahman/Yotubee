// import dotenv from "../.env";
// // require('dotenv').config()
// // import 'dotenv/config'

// dotenv.config();


export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const COMMENTS_LIST_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${process.env.REACT_APP_GOOGLE_API_KEY}&textFormat=plainText&part=snippet&maxResults=50&orderby=published&videoId=`;

export const SUGGESTED_VIDEO_LIST_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=59&type=video&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}&relatedToVideoId=`;

export const YOUTUBE_SEARCH_URL =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&type=video&key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=`;


export const VIDEO_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}&id=`


