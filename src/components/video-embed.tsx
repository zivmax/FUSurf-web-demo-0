import React from "react";

interface VideoEmbedProps {
  title: string;
  children: React.ReactNode;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ title, children }) => (
  <div className="columns is-centered has-text-centered">
    <div className="column is-four-fifths">
      <h2 className="title is-3">{title}</h2>
      <div className="publication-video">{children}</div>
    </div>
  </div>
);

export default VideoEmbed;
