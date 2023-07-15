import { Container } from '@mui/material';
import './Stories.scss';
import StoryImg1 from 'assets/story1.jpg';
import StoryImg2 from 'assets/story2.jpg';
import StoryImg3 from 'assets/story3.jpg';
import StoryImg4 from 'assets/story4.jpg';
import StoryImg5 from 'assets/story5.jpg';
import { NavLink } from 'react-router-dom';

type Props = {};
const Stories = (props: Props) => {
  return (
    <>
      <div className="title-stories">
        <h3 className="sub-title"> Popular stories</h3>
        <h1 className="main-title"> Best Experiences</h1>
      </div>
      <Container>
        <div className="stories-list">
          <div className="story5">
            <NavLink className="decoration-text" to={'/Stories/Explore'}>
              <img className="story-img" src={StoryImg1} alt="story-img" />
              <h3 className="title-sub-img">Explore</h3>
              <p>
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                ...
              </p>
            </NavLink>
          </div>
          <div className="story4">
            <NavLink className="decoration-text" to={'/Stories/Discover'}>
              <img className="story-img" src={StoryImg2} alt="story-img" />
              <h3 className="title-sub-img">Discover</h3>
              <p>
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                ...
              </p>
            </NavLink>
          </div>
          <div className="story3">
            <NavLink className="decoration-text" to={'/Stories/Research'}>
              <img className="story-img" src={StoryImg3} alt="story-img" />
              <h3 className="title-sub-img">Research</h3>
              <p>
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                ...
              </p>
            </NavLink>
          </div>
          <div className="story2">
            <NavLink className="decoration-text" to={'/Stories/Hiking'}>
              <img className="story-img" src={StoryImg4} alt="story-img" />
              <h3 className="title-sub-img">Hiking</h3>
              <p>
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                ...
              </p>
            </NavLink>
          </div>
          <div className="story1">
            <NavLink className="decoration-text" to={'/Stories/Camping'}>
              <img className="story-img" src={StoryImg5} alt="story-img" />
              <h3 className="title-sub-img">Camping</h3>
              <p>
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                ...
              </p>
            </NavLink>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Stories;
