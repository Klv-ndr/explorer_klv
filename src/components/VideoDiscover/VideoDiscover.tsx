import React from 'react';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import './VideoDiscover.scss';

const VideoDiscover: React.FC = () => {
  return (
    <>
      <div className="video-container">
        <div className="video-description">
          <h3>Watch the video</h3>
          <h1>Proin ultricies</h1>
          <p>
            Pellentesque sed dictum arcu donec ut tellus quis justo suscipit
            lobortis mollis nec erat. Sed et eros leohasellus varius.
          </p>
        </div>
        <div className="video-player">
          <VideoPlayer url="https://vimeo.com/189739950" />
        </div>
      </div>
    </>
  );
};

export default VideoDiscover;
