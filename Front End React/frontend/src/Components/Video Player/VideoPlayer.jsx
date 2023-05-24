import React, { useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const token = localStorage.getItem("token");
  const urlvideo = localStorage.getItem("urlvideo");
  const videoName = localStorage.getItem("videoName");
  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = async (event) => {
    setIsPlaying(false);
    const video = event.target;
    const time = video.currentTime;
    const body = {
      time: time,
      name: videoName,
    };
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/v1/ocr/1", body, {
        headers: {
          "x-access-token": `${token}`,
        },
      });
      localStorage.setItem("texts", JSON.stringify(res.data.texts));
      console.log(localStorage.getItem("texts"));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location.href = "http://localhost:3000/code"
    } 
    catch (error) {
      console.log("error", error);
    }
    window.open("/code", '_blank')
  };
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={urlvideo}
        playing={isPlaying}
        controls
        width="100%"
        height="600px"
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
};

export default VideoPlayer;
