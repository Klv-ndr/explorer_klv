import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.scss';

const Slider = () => {
  const slideStyles = {
    height: '1080px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const spanStyles: React.CSSProperties = {
    zIndex: 6,
    fontFamily: 'Abril Fatface',
    height: 'auto',
    color: 'rgb(62, 58, 59)',
    textDecoration: 'none',
    whiteSpace: 'normal',
    width: '750px',
    minHeight: '0px',
    minWidth: '0px',
    maxHeight: 'none',
    maxWidth: 'none',
    textAlign: 'center',
    lineHeight: '95px',
    letterSpacing: '0px',
    fontWeight: 400,
    fontSize: '90px',
    transformOrigin: '50% 50%',
    opacity: 1,
    transform: 'translate(0px, 0px)',
    visibility: 'visible',
    backgroundColor: 'transparent',
  };

  return (
    <Slide autoplay={true} duration={2500}>
      <div className="each-slide-effect">
        <div className="slider-1" style={{ ...slideStyles }}>
          <span className="span-slider" style={{ ...spanStyles }}>
            Go on Exciting adventures
          </span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="slider-2" style={{ ...slideStyles }}>
          <span
            className="span-slider"
            style={{ ...spanStyles, color: '#fff' }}
          >
            Go on Exciting adventures
          </span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="slider-3" style={{ ...slideStyles }}>
          <span
            className="span-slider"
            style={{ ...spanStyles, color: '#fff' }}
          >
            Go on Exciting adventures
          </span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="slider-4" style={{ ...slideStyles }}>
          <span
            className="span-slider"
            style={{ ...spanStyles, color: '#fff' }}
          >
            Go on Exciting adventures
          </span>
        </div>
      </div>
    </Slide>
  );
};

export default Slider;
