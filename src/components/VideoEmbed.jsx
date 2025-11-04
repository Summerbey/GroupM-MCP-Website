import React from 'react';

const VideoEmbed = ({ src, title = 'Video Tutorial' }) => {
  return (
    <div className="video-container">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
