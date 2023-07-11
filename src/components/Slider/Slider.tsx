import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slider1 from 'assets/slider1.jpg';
import slider2 from 'assets/slider2.jpg';
import slider3 from 'assets/slider3.jpg';
import slider4 from 'assets/slider4.jpg';

import './Slider.scss';

const Slider = () => {
  const handleOnSlideChange = (e: { item: any }) => {
    console.log(`Slide changed to index: ${e.item}`);
  };

  return (
    <div className="slider-container">
      <AliceCarousel
        mouseTracking
        items={[
          <div className="slider-item">
            <img src={slider1} alt="Slide 1" />
          </div>,
          <div className="slider-item">
            <img src={slider2} alt="Slide 2" />
          </div>,
          <div className="slider-item">
            <img src={slider3} alt="Slide 3" />
          </div>,
          <div className="slider-item">
            <img src={slider4} alt="Slide 4" />
          </div>,
        ]}
        onSlideChanged={handleOnSlideChange}
        infinite
        autoPlay
        autoPlayInterval={2000}
      />
    </div>
  );
};

export default Slider;
