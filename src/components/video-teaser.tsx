import React from "react";

interface VideoTeaserProps {
  videoSrc: string;
  subtitleText: string;
}

const VideoTeaser: React.FC<VideoTeaserProps> = ({
  videoSrc,
  subtitleText,
}) => {
  return (
    <div className="container is-max-desktop">
      <div className="hero-body">
        <video id="teaser" autoPlay muted loop playsInline height="100%">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <h2 className="subtitle has-text-centered">
          <span className="dnerf">Maecenas</span> {subtitleText}
        </h2>
      </div>
    </div>
  );
};

export default VideoTeaser;
