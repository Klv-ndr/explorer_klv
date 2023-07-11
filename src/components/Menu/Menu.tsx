import Button from '@mui/material/Button';
import './Menu.scss';
import { Link } from 'react-router-dom';

type Props = {};
const Menu = (props: Props) => {
  return (
    <>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        <Link to="/Home"> Home </Link>
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        <Link to="/AboutUs"> About Us </Link>
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        Destinations
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        Gallery
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        Stories
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        Contact Us
      </Button>
    </>
  );
};
export default Menu;
