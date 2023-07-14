import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Face from 'assets/testimonial.png';
import './Comments.scss';

const Comments: React.FC = () => {
  return (
    <div className="comments-wrapper">
      <div className="flex-face">
        <img className="face" src={Face} alt="face" />
      </div>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={7000}
        infiniteLoop={true}
        centerMode={true}
      >
        <div>
          <h1>David</h1>
          <h4 className="comments">
            Hiking is the preferred term, in Canada and the United States, for a
            long, vigorous walk, usually on trails. The word hiking is also
            often used in the UK, along with rambling.
          </h4>
        </div>
        <div>
          <h1>Mark</h1>
          <h4 className="comments">
            Nec ea adipiscing efficiendi. Quis veniam no nam. Elitr ubique
            aliquam in cum, cu per dicat verear, veritus persequeris
            delicatissimi te mei. Eu usu commune tacimates principes.
          </h4>
        </div>
        <div>
          <h1>Andrii</h1>
          <h4 className="comments">
            Malis contentiones duo ex. Duis inani pertinacia mei cu. An etiam
            expetendis mei. Nam id soluta discere, agam illum latine mei ut,
            eligendi vertere mvel te vocibus fabellas.
          </h4>
        </div>
        <div>
          <h1>Daniel</h1>
          <h4 className="comments">
            Malis contentiones duo ex. Duis inani pertinacia mei cu. An etiam
            expetendis mei. Nam id soluta discere, agam illum latine mei ut,
            eligendi vertere mvel te vocibus fabellas. Roland Charles Nec ea
            adipiscing efficiendi. Quis veniam no nam. Elitr ubique aliquam in
            cum, cu per dicat verear, veritus persequeris delicatissimi te mei.
            Eu usu commune tacimates principes
          </h4>
        </div>
      </Carousel>
    </div>
  );
};

export default Comments;
