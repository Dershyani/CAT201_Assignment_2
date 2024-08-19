import React, { useEffect, useRef, useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  AdditionalText,
  VideoContainer,
  Video,
} from "./DiscoverElements";
import VideoFile from "../../videos/video.mp4"; // Import the video file

const DiscoverSection = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  // Function to toggle video play/pause
  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const videoContainer = document.getElementById("video-container");
      if (videoContainer) {
        const rect = videoContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setPlayVideo(true);
        } else {
          setPlayVideo(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ServicesContainer id="discover">
        <div className="small-discover">
          <ServicesH1>About us</ServicesH1>
          <AdditionalText>Choosing us means a sustainable future</AdditionalText>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesH2>Reliable Delivery Services</ServicesH2>
            </ServicesCard>
            <ServicesCard>
              <ServicesH2>Green Success Guides</ServicesH2>
            </ServicesCard>
            <ServicesCard>
              <ServicesH2>Money-Back Assurance</ServicesH2>
            </ServicesCard>
          </ServicesWrapper>
        </div>
      </ServicesContainer>
      
      {/* Place the VideoContainer below your service elements */}
      <VideoContainer id="video-container">
        <Video
          ref={videoRef}
          src={VideoFile} // Use the imported video
          autoPlay={playVideo}
          loop
          muted
          onClick={toggleVideoPlay} // Add a click event handler
        />
      </VideoContainer>
    </>
  );
};

export default DiscoverSection;
