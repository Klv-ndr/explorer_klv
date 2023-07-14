import { Container } from '@mui/material';
import './Destination.scss';
import imgItem1 from 'assets/home-single-image-1.jpg';
import imgItem2 from 'assets/home-single-image-2.jpg';
import imgItem3 from 'assets/home-single-image-3.jpg';

type Props = {};
const Destination = (props: Props) => {
  return (
    <>
      <div className="destination-img">
        <div className="title-description">
          <h3 className="h3">Exotic Adventures</h3>
          <h1 className="h1">Popular Destination</h1>
          <h4 className="h4">
            Hiking is the preferred term, in Canada and the United States, for a
            long, vigorous walk, usually on trails. The word hiking is also
            often used in the UK, along with rambling (a slightly old-fashioned
            term)
          </h4>
        </div>
        <Container>
          <div className="list-item">
            <div className="item">
              <img className="image-item" src={imgItem1} alt="image-item" />
              <h2>Explore Alaska today</h2>
              <p>
                Proin ac orci vel dui rhoncus dignissim lorem Proinac orci vel
                dui rhoncus dignissim lorem.
              </p>
            </div>
            <div className="item">
              <img className="image-item" src={imgItem2} alt="image-item" />
              <h2>Explore Canada today</h2>
              <p>
                Proin ac orci vel dui rhoncus dignissim lorem Proinac orci vel
                dui rhoncus dignissim lorem.
              </p>
            </div>
            <div className="item">
              <img className="image-item" src={imgItem3} alt="image-item" />
              <h2>Explore Island today</h2>
              <p>
                Proin ac orci vel dui rhoncus dignissim lorem Proinac orci vel
                dui rhoncus dignissim lorem.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Destination;
