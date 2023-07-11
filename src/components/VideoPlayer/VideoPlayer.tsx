import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} controls />
    </div>
  );
};

export default VideoPlayer;
