import Comments from 'components/Comments/Comments';
import CounterAnimation from 'components/Counter/Counter';
import Destination from 'components/Destination/Destination';
import Stories from 'components/Popular Stories/Stories';
import Slider from 'components/Slider/Slider';
import VideoDiscover from 'components/VideoDiscover/VideoDiscover';
import Adventures from 'components/Adventures/Adventures';

type Props = {};
const Home = (props: Props) => {
  return (
    <>
      <Slider />
      <Destination />
      <Stories />
      <Adventures />
      <CounterAnimation />
      <VideoDiscover />
      <Comments />
    </>
  );
};
export default Home;
