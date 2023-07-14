import './AboutUs.scss';
import ImgExplore1 from 'assets/home-custom1.png';
import ImgExplore2 from 'assets/home-custom2.png';
import ImgExplore3 from 'assets/home3.png';
import Comments from 'components/Comments/Comments';

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <div className="about-us">About Us</div>
      <div className="explore-together">
        <div className="title-explore-together">
          <h3 className="sub-title-together">Explore together</h3>
          <h1 className="main-title-together">
            Discover the most engaging places
          </h1>
        </div>
        <div className="explore-description">
          <div className="exploration">
            <img src={ImgExplore1} alt="img-explore1" />
            <h3>Exploration</h3>
            <p>Proin ac orci vel dui rhoncus dignissim lorem ipsum.</p>
          </div>
          <div className="adventures">
            <img src={ImgExplore2} alt="img-explore2" />
            <h3>Adventures</h3>
            <p>Proin ac orci vel dui rhoncus dignissim lorem ipsum.</p>
          </div>
          <div className="equipment">
            <img src={ImgExplore3} alt="img-explore3" />
            <h3>Equipment</h3>
            <p>Proin ac orci vel dui rhoncus dignissim lorem ipsum.</p>
          </div>
        </div>
      </div>
      <div className="background-comments">
        <Comments />
      </div>
    </>
  );
};

export default AboutUs;
