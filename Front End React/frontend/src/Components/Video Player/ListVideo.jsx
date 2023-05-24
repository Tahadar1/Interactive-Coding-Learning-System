import React, { useState } from "react";
import video1 from  '../../assests/video1.mp4'
import video2 from '../../assests/video2.mp4'
import './listvideo.css'

const videoData = [
  {
    id: 1,
    title: "video1",
    description: "This is the first video",
    url: video1,
  },
  {
    id: 2,
    title: "video2",
    description: "This is the second video",
    url: video2,
  },
  {
    id: 3,
    title: "video1",
    description: "This is the third video",
    url: video1,
  },
];

const ListVideo = ()=>{
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    localStorage.setItem("urlvideo", video.url)
    localStorage.setItem("videoName", video.title)
    window.location.href = "http://localhost:3000/play"
  };

  return (
  <div className="list_items">
      <div className="list_container">
        {videoData.map((video) => (
          <div key={video.id} className="video_item">
            <div className="video_title" onClick={() => handleVideoSelect(video)}>
              {video.title}
            </div>
            <div className="video_description">
              {video.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListVideo;
