import { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Gallery.scss';

import Img3 from 'assets/home-single-image-1.jpg';
import Img4 from 'assets/home-single-image-2.jpg';
import Img5 from 'assets/home-single-image-3.jpg';
import Img7 from 'assets/slider1.jpg';
import Img8 from 'assets/slider2.jpg';
import Img9 from 'assets/slider3.jpg';
import Img10 from 'assets/slider4.jpg';
import Img11 from 'assets/story1.jpg';
import Img12 from 'assets/story2.jpg';
import Img13 from 'assets/story3.jpg';
import Img14 from 'assets/story4.jpg';
import Img15 from 'assets/story5.jpg';

type Props = {};

const Gallery = (props: Props) => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [
    Img3,
    Img4,
    Img5,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
  ];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowSlider(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };

  return (
    <>
      <div className="gallery-title-text">Gallery</div>
      <div className="container-gallery">
        <div className="imgs-gallery">
          {images.map((image, index) => (
            <img
              key={index}
              className="width"
              src={image}
              alt="image1"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>

      {showSlider && (
        <div className="slider-overlay">
          <div className="slider-container">
            <div className="close-button" onClick={handleCloseSlider}>
              Close
            </div>
            <Slide
              indicators={true}
              arrows={true}
              pauseOnHover={false}
              infinite={true}
              canSwipe={true}
              duration={5000}
              transitionDuration={500}
              prevArrow={<div className="prev-arrow">Previous</div>}
              nextArrow={<div className="next-arrow">Next</div>}
              autoplay={false}
              cssClass="slide-wrapper"
              defaultIndex={selectedImageIndex}
            >
              {images.map((image, index) => (
                <div className="each-slide" key={index}>
                  <img className="slide-image" src={image} alt="slide-img" />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
