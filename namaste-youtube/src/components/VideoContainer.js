import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import {Link} from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getvideos();
  },[]);

  const getvideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map(video =>
      <Link to={"/watch?v="+video.id}>
        <VideoCard key={video.id} info={video}/>
      </Link>
      )}
      
    </div>
  )
}

export default VideoContainer