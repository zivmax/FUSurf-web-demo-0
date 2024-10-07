import React from "react";
import { withPrefix } from "gatsby";

interface VideoCardProps {
  title: string;
  description: string;
  videoSrc: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  videoSrc,
}) => (
  <div className="content">
    <h2 className="title is-3">{title}</h2>
    <p>{description}</p>
    <div className="has-text-centered ">
      <video autoPlay controls muted loop playsInline width="100%">
        <source src={withPrefix(videoSrc)} type="video/mp4" />
      </video>
    </div>
  </div>
);

export default VideoCard;
